/* eslint-disable react/no-unescaped-entities */
import { CustomButton } from "@/components";
import { createStyles, Title, Button, Container, rem } from "@mantine/core";
import bg from "@/assets/images/stacked-waves-haikei.svg";
import bgDark from "@/assets/images/stacked-waves-haikei-dark.svg";

import Link from "next/link";

const useStyles = createStyles((theme) => ({
  imageWrap: {
    height: "100%",
    width: "100%",
    backgroundImage:
      theme.colorScheme === "dark" ? `url(${bgDark.src})` : `url(${bg.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: rem(-56),
    paddingTop: rem(100),
    paddingBottom: rem(100),

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(200),
      paddingBottom: rem(200),
    },
    [theme.fn.smallerThan("xs")]: {
      height: "100vh",
      // // paddingTop: rem(140),
      // paddingBottom: rem(120),
    },
  },
  wrapper: {
    position: "relative",
    paddingTop: rem(40),
    paddingBottom: rem(80),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(60),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      gap: 0,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][2],
    textShadow:
      theme.colorScheme === "dark"
        ? ""
        : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  description: {
    textAlign: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.primaryColor[1]
        : theme.colors.dark[4],

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    textDecoration: "none",
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,
      width: "100%",

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

const Hero = () => {
  const { classes, theme } = useStyles();

  return (
    <div className={classes.imageWrap}>
      <Container className={classes.wrapper} size={1000}>
        <div className={classes.inner}>
          <Title className={classes.title}>Hello there!, I'm Frank</Title>

          <div className={classes.controls}>
            <Link href="/projects" className={classes.control}>
              <Button
                size="lg"
                fullWidth
                variant="default"
                color="gray"
                onClick={() => ""}
              >
                View Projects
              </Button>
            </Link>
            <Link
              className={classes.control}
              href="/Frank-Mendoza-CV.pdf"
              download
              target="_blank"
            >
              <CustomButton
                fullWidth
                text="Download CV"
                size="lg"
                onClick={() => ""}
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
