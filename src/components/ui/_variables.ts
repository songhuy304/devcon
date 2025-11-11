import { type ClassValue } from "clsx";
export type Space =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const GapClasses: Record<Space, ClassValue> = {
  "0": "gap-0",
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "5": "gap-5",
  "6": "gap-6",
  "7": "gap-7",
  "8": "gap-8",
  "9": "gap-9",
  "10": "gap-10",
  "12": "gap-12",
  "14": "gap-14",
  "16": "gap-16",
  "20": "gap-20",
  "24": "gap-24",
  "28": "gap-28",
  "32": "gap-32",
  "36": "gap-36",
  "40": "gap-40",
};

export const TextSizeClasses: Record<TextSize, ClassValue> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

export const slideBasisMap: Record<number, string> = {
  1: "basis-full",
  2: "basis-1/2",
  3: "basis-1/3",
  4: "basis-1/4",
  5: "basis-1/5",
  6: "basis-1/6",
};

export const DisabledClasses =
  "disabled:pointer-events-none disabled:opacity-50";
