/* eslint-disable react/no-unescaped-entities */
import { CustomButton } from "@/components";
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  rem,
  Card,
} from "@mantine/core";
import bg from "@/assets/images/stacked-waves-haikei.svg";
import bgDark from "@/assets/images/stacked-waves-haikei-dark.svg";
import { useRouter } from "next/navigation";
import { heroData } from "@/mockData";

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
    paddingTop: rem(140),
    paddingBottom: rem(120),
    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(200),
      paddingBottom: rem(200),
    },
    [theme.fn.smallerThan("xs")]: {
      height: "calc(100vh + 56px)",
      // // paddingTop: rem(140),
      // paddingBottom: rem(120),
    },
  },
  wrapper: {
    position: "relative",
    paddingTop: rem(40),
    paddingBottom: rem(80),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(100),
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
      alignItems: 'start',
      gap: 0,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][2],
    // textShadow:
    //   "-1px -1px 0 #888, 1px -1px 0 #888, -1px 1px 0 #888, 1px 1px 0 #888",
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

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

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
  const router = useRouter();

  const features = heroData.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        size={rem(50)}
        stroke={2}
        color={theme.colors[theme.primaryColor][2]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <div className={classes.imageWrap}>
      <Container className={classes.wrapper} size={1000}>
        <div className={classes.inner}>
          <Title className={classes.title}>
            Looking for a{" "}
            <Text component="span" className={classes.highlight} inherit>
              Frontend Developer ?
              {/* <Player
                autoplay
                loop
                keepLastFrame
                speed={0.6}
                src="https://assets1.lottiefiles.com/temp/lf20_9gY9Yf.json"
                style={{ width: "40px", height: "40px" }}
              >
                <Controls visible={false} />
              </Player> */}
            </Text>
          </Title>

          <Container p={0} size={500}>
            <Text size="lg" className={classes.description}>
              Let's build web user interface with the use of these popular
              frameworks like React js, Redux Toolkit and more.
              {/* Reach me if you're interested,
              just click message. */}
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              className={classes.control}
              size="lg"
              variant="default"
              color="gray"
              onClick={() => router.push("/contact")}
            >
              Contact now
            </Button>
            <CustomButton
              className={classes.control}
              text="Check Projects"
              size="lg"
              onClick={() => router.push("/projects")}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
