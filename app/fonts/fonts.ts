import localFont from "next/font/local";

// Onest Font
export const onest = localFont({
  src: [
    {
      path: "../fonts/static/Onest-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/static/Onest-Bold.ttf",
      weight: "600",
      style: "semibold",
    },
  ],
});

// Urbanist Font
export const urbanist = localFont({
  src: [
    {
      path: "../fonts/static/Urbanist-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/static/Urbanist-Bold.ttf",
      weight: "700",
    },
  ],
});