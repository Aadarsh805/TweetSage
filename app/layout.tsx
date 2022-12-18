"use client";

import "../styles/globals.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import bgImage from "public/bg-curve.png";
import Image from "next/image";
import Footer from "./Footer";

const theme = createTheme({
  palette: {
    action: {
      disabledBackground: "#e0e0e0",
      disabled: "#9f9898",
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <html>
      <body className="h-screengroup-hover:translate-x-[-9.5rem]">
        <Navbar />
        <Image
          src={bgImage}
          alt="curve-image"
          className="lg:w-[70rem] w-full absolute top-[71%] right-2/4 translate-x-[50%] translate-y-[-50%] -z-[5]"
        />
        <div className="mt-[3.2rem]">
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </div>
        <div className="px-5 flex items-center justify-center">
          <Footer />
        </div>

        <Analytics />
      </body>
    </html>
  );
}
