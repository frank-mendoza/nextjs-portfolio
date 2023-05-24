"use client";

import { ThemeProvider } from "@/components/provider";
import HomePage from "@/features/home";

const Home = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
};

export default Home;
