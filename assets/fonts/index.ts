import localFont from "next/font/local";

export const livvic = localFont({
  src: [
    { path: "./Livvic-Thin.ttf", weight: "100", style: "normal" },
    { path: "./Livvic-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./Livvic-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Livvic-Light.ttf", weight: "300", style: "normal" },
    { path: "./Livvic-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Livvic-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Livvic-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Livvic-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Livvic-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-livvic",
});

export const soria = localFont({
  src: [{ path: "./soria-font.ttf", weight: "400", style: "normal" }],
  variable: "--font-soria",
});