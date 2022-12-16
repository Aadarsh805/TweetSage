"use client";

import "../styles/globals.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/react";

const theme = createTheme({
  palette: {
    action: {
      disabledBackground: "red",
      disabled: "white",
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-[#EFF5F5]">
        <Navbar />
        <div className="mt-[3.2rem] h-screen">
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
