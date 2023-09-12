"use client";

import { AlertDialog, CustomButton } from "@/components";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Group,
  createStyles,
  rem,
  Title,
  LoadingOverlay,
} from "@mantine/core";
import bg from "@/assets/images/stacked-waves-haikei.svg";
import bgDark from "@/assets/images/stacked-waves-haikei-dark.svg";
import { useForm } from "@mantine/form";
import { ContactProps } from "@/types/index.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MoonLoader } from "react-spinners";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

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
      padding: theme.spacing.xl,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
      [theme.fn.smallerThan("xs")]: {
        maxWidth: "100%",
        maxHeight: "300px",
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
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_FORM_SCRIPT_URL!;
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbwslINMU-qFNneN-QYV60vS8iks0q13XXd6ONxXOLkcJbz47YkKe9bBkwizfGdUxU_oFw/exec'

  const form = useForm<ContactProps>({
    initialValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },

    validate: {
      name: (value) =>
        value.length < 4 ? "Name must have at least 4 characters" : null,
      subject: (value) =>
        value.length > 200
          ? "Subject must only less than 200 characters long"
          : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  // useEffect(() => {
  //   if (!loading) {
  //     // Disable scrolling when the component mounts
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [loading]);

  const onSubmitDetails = (values: ContactProps) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("subject", values.subject);
    formData.append("message", values.message);

    setLoading(false);
    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setLoading(true);
        router.push("/contact/success");
      })
      .catch(() => {
        // setLoader(false);
        setError("Please double check your credentials or try again.");
        setLoading(true);
      });
  };

  return (
    <>
      <LoadingOverlay
        visible={!loading}
        overlayBlur={10}
        exitTransitionDuration={3}
        loader={<MoonLoader color="#FCC419" />}
      />
      <Title order={2} className={classes.header} mb={30}>
        Contact
      </Title>
      <Paper shadow="none" radius="lg">
        {error !== "" && <AlertDialog error={error} />}
        <div className={classes.wrapper}>
          <Group align="center" className={classes.contacts} position="center">
            {/* <Text fz="lg" fw={700} className={classes.title}>
              Contact information
            </Text> */}

            <Player
              autoplay
              loop
              keepLastFrame
              speed={0.6}
              src="https://assets8.lottiefiles.com/packages/lf20_abqysclq.json"
              style={{ maxHeight: "300px", maxWidth: "300px" }}
            >
              <Controls visible={false} />
            </Player>
          </Group>

          <form
            className={classes.form}
            name="submit-to-google-sheet"
            onSubmit={form.onSubmit((values) => onSubmitDetails(values))}
          >
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <TextInput
                label="Your name"
                placeholder="Your name"
                required
                {...form.getInputProps("name")}
              />

              <TextInput
                label="Your email"
                mt="md"
                placeholder="hello@mantine.dev"
                required
                {...form.getInputProps("email")}
              />

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                required
                {...form.getInputProps("subject")}
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
                {...form.getInputProps("message")}
              />

              <Group position="right" mt="md">
                <CustomButton
                  className={classes.control}
                  text="Send message"
                  type="submit"
                  size="lg"
                  onClick={() => ""}
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
