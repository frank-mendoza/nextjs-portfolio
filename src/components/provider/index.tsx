"use client";

import { FooterSocial, HeaderMiddle } from "@/components";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import {  useHotkeys, useLocalStorage } from "@mantine/hooks";
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

  const links = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
    { label: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    if (loading) {
      // Disable scrolling when the component mounts
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

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
        {/* <LoadingOverlay
          visible={loading}
          overlayBlur={10}
          exitTransitionDuration={3}
          loader={<BounceLoader color="#FCC419" />}
          style={{
            overflow: "hidden",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        /> */}
        {!loading && (
          <>
            <HeaderMiddle links={links} />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
              {children}
            </main>
            <FooterSocial />
          </>
        )}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
