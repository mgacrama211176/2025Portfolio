import localFont from "next/font/local";

// Load the Null font and export it as a constant
export const nullFont = localFont({
  src: [
    {
      path: "../../../public/font/local/Null_Free.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/font/local/Null_Free.otf",
      weight: "700",
      style: "normal",
    },
    // Add other weights/styles if available
  ],
  variable: "--font-null", // This creates a CSS variable you can use with Tailwind
  display: "swap",
});
