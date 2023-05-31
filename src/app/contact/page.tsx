"use client";

import { Container } from "@mantine/core";
import Contact from "@/features/contact";
import NavProvider from "@/components/navProvider";

const ContactPage = () => {
  return (
    <NavProvider>
      <Container size={1000} pb="xl" pt={50}>
        <Contact />
      </Container>
    </NavProvider>
  );
};

export default ContactPage;
