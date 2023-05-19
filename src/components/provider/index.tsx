"use client";

import { HeaderMiddle } from "@/components";
import { MantineProvider } from "@mantine/core";

type ProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ProviderProps) {
  const links = [
    { label: "Projects", link: "/projects" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];
  return (
    <MantineProvider
      theme={{
        colors: {
          brand: ["#FFF3BF", "#868e96", "#FCC419"],
        },
        primaryColor: "brand",
      }}
    >
      <HeaderMiddle links={links} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}

        {/* basics of typescript types */}
        {/* <Demo
          style={{ padding: 10, display: 'flex' }}
          handleClick={(e, id) => console.log("clcik", e, id)}
          handleChange={(e) => console.log(e)}
          value="" 
          name={{
            first: "test",
            last: "lasr"
          }}        >
          <h1>Test child</h1>
          <h2>test 2</h2>
        </Demo> */}

        {/*  */}
      </main>
    </MantineProvider>
  );
}
