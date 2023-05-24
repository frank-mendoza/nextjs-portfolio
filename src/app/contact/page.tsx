"use client";

import React from "react";
import { Container } from "@mantine/core";
import Contact from "@/features/contact";
import { ThemeProvider } from "@/components/provider";

const ContactPage = () => {
  return (
    <ThemeProvider>
      <Container size={1000} pb="xl" pt={50}>
        <Contact />
      </Container>
    </ThemeProvider>
  );
};

export default ContactPage;
