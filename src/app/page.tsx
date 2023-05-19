"use client";

import {HomePage } from "@/components";
import { ThemeProvider } from "@/components/provider";

const Home = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
};

export default Home;
