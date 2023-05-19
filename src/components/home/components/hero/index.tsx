/* eslint-disable react/no-unescaped-entities */
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  rem,
  Card,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(40),
    paddingBottom: rem(80),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 2],
  },

  description: {
    textAlign: "center",

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

const mockdata = [
  {
    title: "Collaborative to the team",
    description:
      "Collaboration makes work easier and relaxing as you share knowledge between teams",
    icon: IconGauge,
  },
  {
    title: "Up unto the trend in web development",
    description:
      "New and popular frameworks arises and as a frontend dev, it is very important to have access to this new framework and techs",
    icon: IconUser,
  },
  {
    title: "Willingness to learn new technologies",
    description:
      "I am not relying on my current skill instead, I always seek for a new skill to develop",
    icon: IconCookie,
  },
];

const Hero = () => {
  const { classes, theme } = useStyles();
  const router = useRouter()

  // if (props.status === 'success') {
  //   console.log('success')
  // } else if (props.status === 'failure') {
  //   console.log('failure')
  // } else if (props.status === 'loading') console.log('loading')

  const features = mockdata.map((feature) => (
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
    <>
      <Container className={classes.wrapper} size={1000}>
        <div className={classes.inner}>
          <Title className={classes.title}>
            Experienced{" "}
            <Text component="span" className={classes.highlight} inherit>
              Frontend Web Developer
            </Text>{" "}
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
              Build web user interface with the use of popular frameworks like
              React js, Redux Toolkit and more. Reach me if you're interested,
              just click message.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              className={classes.control}
              size="lg"
              variant="default"
              color="gray"
              onClick={() => router.push('/projects')}
            >
              Message
            </Button>
            <Button className={classes.control}  variant="gradient"
              gradient={{ deg: 133, from: "#FFF3BF", to: "#FCC419" }}
              size="lg"
              radius="md">
              Check Projects
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero