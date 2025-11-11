import { Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages/home";
import { MainLayout } from "@/pages/layout";
import LoadingPage from "@/pages/loading";
import React, { Suspense } from "react";
import About from "@/pages/about";
import PastEventPage from "@/pages/about/past-event";

const MainRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/past-event" element={<PastEventPage />} />
        </Route>

        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
