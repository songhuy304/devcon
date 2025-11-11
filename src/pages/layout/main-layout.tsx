/* eslint-disable react-refresh/only-export-components */

import { Outlet, useLocation } from "react-router-dom";

import React, { useContext, useEffect, useState } from "react";
import { useIsMobile } from "@/shared/hooks";
import { Header } from "@/pages/layout/components/header";
import Footer from "@/pages/layout/components/footer";

export interface MainLayoutContextProps {
  isMobile: boolean;
  isOpenMenu: boolean;
  setIsOpenMenu: (value: boolean) => void;
}

const MainLayoutContext = React.createContext<MainLayoutContextProps | null>(
  null
);

export const useMainLayout = (): MainLayoutContextProps => {
  const context = useContext(MainLayoutContext);
  if (!context)
    throw new Error("useMainLayout must be used within a MainLayoutProvider");
  return context;
};

export const MainLayoutProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const contextValue: MainLayoutContextProps = {
    isMobile,
    isOpenMenu,
    setIsOpenMenu,
  };

  return (
    <MainLayoutContext.Provider value={contextValue}>
      <div
        ref={ref}
        className="min-h-screen flex flex-col theme-index"
        {...props}
      >
        {children}
      </div>
    </MainLayoutContext.Provider>
  );
});

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <MainLayoutProvider>
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </MainLayoutProvider>
  );
};
