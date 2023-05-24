"use client";

import { useEffect, useState } from "react";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  rem,
  Image,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandLinkedin,
  IconBrandMessenger,
  IconBrandWhatsapp,
  IconBrandSkype,
  IconMail,
  IconSun,
  IconMoonStars,
} from "@tabler/icons-react";
import { GithubIcon } from "@mantine/ds";
import Logo from "@/assets/images/logo.svg";
import { useRouter } from "next/navigation";

const useStyles = createStyles((theme) => ({
  header: {
    position: "fixed",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(56),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.dark[3],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.yellow[1]
          : theme.colors.gray[0],
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.dark[3],
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
  setLoadingOverlay: any;
}

const HeaderMiddle = ({ links, setLoadingOverlay }: HeaderMiddleProps) => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  useEffect(() => {
    const path = window.location.pathname;
    path === "/" ? "/home" : "path";
    setActive(path);
  }, [active]);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        router.push(link.link);
        setActive(link.link);
        setLoadingOverlay(true);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56} mb={0}>
      <Container className={classes.inner} size={1000}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Group spacing={10}>
          <Image src={Logo.src} alt="fm" width={30} height={30} />
          <Text
            weight={700}
            color={colorScheme === "dark" ? "white" : "gray"}
            size={20}
          >
            FM
          </Text>
        </Group>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Group position="center" my="xl" mr={10}>
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[3]
                    : theme.colors.gray[0],
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[1]
                    : theme.colors.dark[2],
              })}
            >
              {colorScheme === "dark" ? (
                <IconSun size="1.2rem" />
              ) : (
                <IconMoonStars size="1.2rem" />
              )}
            </ActionIcon>
          </Group>
          <ActionIcon
            size="lg"
            component="a"
            href="https://github.com/frank-mendoza"
          >
            <GithubIcon size="1.1rem" />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://linkedin.com/in/frank-mendoza-382213207"
          >
            <IconBrandLinkedin size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://m.me/fank.mendoza.965580"
          >
            <IconBrandMessenger size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://wa.me/639506648307">
            <IconBrandWhatsapp size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://join.skype.com/invite/xX4Vy6VXFaP0"
          >
            <IconBrandSkype size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:example@email.com";
            }}
          >
            <IconMail size="1.1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
};

export default HeaderMiddle;
