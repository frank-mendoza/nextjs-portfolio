import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  rem,
  Image,
  Text,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  // IconBrandMessenger,
  // IconBrandWhatsapp,
  // IconBrandSkype,
  IconMail,
} from "@tabler/icons-react";

import Logo from "@/assets/images/logo.svg";
import { GithubIcon } from "@mantine/ds";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(50),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[1],
  },
}));

const FooterSocial = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={10}>
          <Image src={Logo.src} alt="fm" width={20} height={20} />
          <Text weight={700} className={classes.title} size='md'>
            FM
          </Text>
        </Group>
        <Text color="dimmed" size="xs">
          © 2023 Frank Dev. All rights reserved.
        </Text>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            size="md"
            component="a"
            target="_blank"
            href="https://github.com/frank-mendoza"
          >
            <GithubIcon size="1.1rem" />
          </ActionIcon>
          <ActionIcon
            size="md"
            component="a"
            target="_blank"
            href="https://linkedin.com/in/frank-mendoza-382213207"
          >
            <IconBrandLinkedin size="1.1rem" stroke={1.5} />
          </ActionIcon>
          {/* <ActionIcon
            size="lg"
            component="a"
            target="_blank"
            href="https://m.me/fank.mendoza.965580"
          >
            <IconBrandMessenger size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            target="_blank"
            href="https://wa.me/639506648307"
          >
            <IconBrandWhatsapp size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            target="_blank"
            href="https://join.skype.com/invite/xX4Vy6VXFaP0"
          >
            <IconBrandSkype size="1.1rem" stroke={1.5} />
          </ActionIcon> */}
          <ActionIcon
            size="md"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:example@email.com";
            }}
          >
            <IconMail size="1.1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default FooterSocial;
