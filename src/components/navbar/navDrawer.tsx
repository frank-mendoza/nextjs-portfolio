import { useState } from "react";
import {
  Navbar,
  createStyles,
  Stack,
  rem,
  getStylesRef,
  Group,
  ActionIcon,
  Drawer,
} from "@mantine/core";
import {
  Icon24Hours,
  // IconAddressBook,
  IconBrandLinkedin,
  IconBrandMessenger,
  IconBrandReact,
  IconBrandSkype,
  IconBrandWhatsapp,
  IconHome,
  IconMail,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { GithubIcon } from "@mantine/ds";
import { IconAddressBook } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },

  drawer: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  onClick?(): void;
}

type NavProps = {
  openDrawer: boolean;
  close: () => void;
};

const data = [
  { link: "/", label: "Home", icon: IconHome },
  { link: "/about", label: "About", icon: IconBrandReact },
  { link: "/contact", label: "Contact", icon: IconAddressBook },
  { link: "/projects", label: "Projects", icon: Icon24Hours },
];

export function NavbarDrawer({ openDrawer, close }: NavProps) {
  const { classes, cx } = useStyles();
  const router = useRouter();

  const [active, setActive] = useState("/");
  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        router.push(item.link);
        setActive(item.label);
        close()
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Drawer
      opened={openDrawer}
      onClose={close}
      size={200}
      withCloseButton={false}
      className={classes.drawer}
    >
      <Navbar width={{ sm: 300 }} p={0}>
        <Navbar.Section grow mt={50}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>
        <Navbar.Section className={classes.footer}>
          <Group spacing={0} position='apart' noWrap>
            <ActionIcon
              size="sm"
              component="a"
              target="_blank"
              href="https://github.com/frank-mendoza"
            >
              <GithubIcon size="1.1rem" />
            </ActionIcon>
            <ActionIcon
              size="sm"
              component="a"
              target="_blank"
              href="https://linkedin.com/in/frank-mendoza-382213207"
            >
              <IconBrandLinkedin size="1.1rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="sm"
              component="a"
              target="_blank"
              href="https://m.me/fank.mendoza.965580"
            >
              <IconBrandMessenger size="1.1rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="sm"
              component="a"
              target="_blank"
              href="https://wa.me/639506648307"
            >
              <IconBrandWhatsapp size="1.1rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="sm"
              component="a"
              target="_blank"
              href="https://join.skype.com/invite/xX4Vy6VXFaP0"
            >
              <IconBrandSkype size="1.1rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:example@email.com";
              }}
            >
              <IconMail size="1.1rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Navbar.Section>
      </Navbar>
    </Drawer>
  );
}
