"use client";

import NavProvider from "@/components/navProvider";
import HomePage from "@/features/home";

const Home = () => {
  return (
    <NavProvider>
      <HomePage />
    </NavProvider>
  );
};

export default Home;
