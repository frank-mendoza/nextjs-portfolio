"use client";

import { FooterSocial, HeaderMiddle } from "@/components";
import {
  ColorScheme,
  ColorSchemeProvider,
  LoadingOverlay,
  MantineProvider,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

type ProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ProviderProps) {
  const [loadingOverlay, { toggle }] = useDisclosure(false);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const links = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    if (loadingOverlay) {
      // Disable scrolling when the component mounts
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loadingOverlay]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          colors: {
            brand: ["#FFF3BF", "#868e96", "#FCC419", "rgb(26, 27, 30)"],
            dark: [
              "#d5d7e0",
              "#acaebf",
              "#8c8fa3",
              "#666980",
              "#4d4f66",
              "#34354a",
              "#2b2c3d",
              "#1d1e30",
              "#0c0d21",
              "#01010a",
            ],
          },
          primaryColor: "brand",
        }}
      >
        <LoadingOverlay
          visible={loadingOverlay}
          overlayBlur={2}
          exitTransitionDuration={3}
          loader={<BounceLoader color="#FCC419" />}
          style={{ overflow: "hidden" }}
        />
        <HeaderMiddle links={links} setLoadingOverlay={toggle} />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <FooterSocial />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
