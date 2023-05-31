"use client";

import React from "react";

import { Container, Group, Text, createStyles } from "@mantine/core";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { CustomButton } from "@/components";
import { useRouter } from "next/navigation";
import NavProvider from "@/components/navProvider";

const useStyles = createStyles(() => ({
  textWrap: {
    flexDirection: "column",
  },
}));
const ContactMessage = () => {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <NavProvider>
      <Container size={1000} py={100}>
        {" "}
        <Player
          autoplay
          // loop
          keepLastFrame
          speed={0.6}
          src="https://assets10.lottiefiles.com/packages/lf20_lk80fpsm.json"
          style={{ maxHeight: "100px", maxWidth: "100px" }}
        >
          <Controls visible={false} />
        </Player>
        <Group
          spacing={5}
          mt={5}
          position="center"
          className={classes.textWrap}
        >
          <Text size="lg" weight={500}>
            Your message has been sent succesfully.
          </Text>
          <Text mb={20} size="lg" mt={0} weight={500}>
            Thank you for messaging.
          </Text>
          <CustomButton
            onClick={() => router.push("/")}
            size="lg"
            text="Take me back to home page"
          />
        </Group>
      </Container>
    </NavProvider>
  );
};

export default ContactMessage;
