"use client";

import "../styles/globals.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/react";
const theme = createTheme({
  palette: {
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
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
