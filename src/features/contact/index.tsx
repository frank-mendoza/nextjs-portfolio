'use client'

import { CustomButton } from "@/components";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Group,
  createStyles,
  rem,
  Title,
} from "@mantine/core";
import bg from "@/assets/images/stacked-waves-haikei.svg";
import bgDark from "@/assets/images/stacked-waves-haikei-dark.svg";
import { ContactIconsList } from "./contactIconList";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 10,
      border: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: rem(-12),
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg,
      backgroundImage:
        theme.colorScheme === "dark" ? `url(${bgDark.src})` : `url(${bg.src})`,
      // background: " #FFF3BF",
      // background: "linear-gradient(#fff, #FFF3BF)",
      // border: `${rem(1)} solid transparent`,
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(280)}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: theme.colorScheme === "dark" ? "#fff" : "#000",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
    header: {
      // textAlign: "lef",
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
  };
});

const Contact = () => {
  const { classes } = useStyles();

  return (
    <>
      <Title order={2} className={classes.header} mb={30}>
        Contact
      </Title>
      <Paper shadow="none" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text fz="lg" fw={700} className={classes.title}>
              Contact information
            </Text>

            <ContactIconsList variant="gradient" />
          </div>

          <form
            className={classes.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <TextInput label="Your name" placeholder="Your name" />

              <TextInput
                label="Your email"
                mt="md"
                id="email"
                placeholder="hello@mantine.dev"
                required
              />

              <TextInput
                id="subject"
                mt="md"
                label="Subject"
                placeholder="Subject"
                required
              />

              <Textarea
                mt="md"
                id="message"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />

              <Group position="right" mt="md">
                <CustomButton
                  className={classes.control}
                  text="Send message"
                  onClick={() => console.log("")}
                />
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </>
  );
};

export default Contact;
