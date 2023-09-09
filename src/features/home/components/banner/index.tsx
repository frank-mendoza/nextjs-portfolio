import { createStyles, rem, Container } from "@mantine/core";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },
}));

const EmailBanner = () => {
  const { classes } = useStyles();
  return (
    <>
      <Container className={classes.wrapper} size={1000} mt={30}>
        <Player
          autoplay
          loop
          keepLastFrame
          speed={0.6}
          src="https://assets4.lottiefiles.com/packages/lf20_hi95bvmx/WebdesignBg.json"
          style={{ maxHeight: "400px", maxWidth: "400px" }}
        >
          <Controls visible={false} />
        </Player>
      </Container>
    </>
  );
};

export default EmailBanner;
