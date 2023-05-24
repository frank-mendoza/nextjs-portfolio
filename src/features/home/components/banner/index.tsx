import {
  createStyles,
  Text,
  Title,
  Image,
  rem,
  Container,
} from "@mantine/core";
import image from "@/assets/images/email-banner.svg";
import { CustomButton } from "@/components";
import { useRouter } from "next/navigation";

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

  image: {
    maxWidth: "40%",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

const EmailBanner = () => {
  const { classes } = useStyles();
  const router = useRouter()
  return (
    <>
      <Container className={classes.wrapper} size={1000} mt={30}>
        <div className={classes.body}>
          <Title className={classes.title}>Need a developer?</Title>
          <Text fw={500} fz="lg" mb={5}>
            Send a message now!
          </Text>
          <Text fz="sm" c="dimmed">
            Let us share our thoughts for your desired project and make it happen 
          </Text>

          <div className={classes.controls}>
            {/* <TextInput
              id="email"
              placeholder="Your email"
              classNames={{ input: classes.input, root: classes.inputWrapper }}
            /> */}
            <CustomButton
              text="Contact now"
              onClick={() => router.push('/contact')}
            />
          </div>
        </div>
        <Image src={image.src} className={classes.image} alt="" />
      </Container>
    </>
  );
};

export default EmailBanner;
