"use client";

import { FooterSocial, HeaderMiddle } from "@/components";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { useEffect, useState } from "react";
// import { BounceLoader } from "react-spinners";

type ProviderProps = {
  children: React.ReactNode;
};

const defaultState = {
  loading: true,
};

export function ThemeProvider({ children }: ProviderProps) {
  // const [loadingOverlay] = useDisclosure(false);

  const [loading, setLoading] = useState(defaultState.loading);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

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
        {!loading && <div style={{ position: "relative" }}> {children}</div>}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
