import {
  createStyles,
  ThemeIcon,
  Text,
  SimpleGrid,
  Box,
  Stack,
} from "@mantine/core";
import { GithubIcon } from "@mantine/ds";
import {
  IconPhone,
  IconAt,
  IconBrandSkype,
  IconBrandWhatsapp,
  IconBrandMessenger,
  IconBrandLinkedin,
} from "@tabler/icons-react";

type ContactIconVariant = "white" | "gradient";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundColor: "transparent",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  description: {
    color: theme.colorScheme === "dark" ? theme.colors.yellow[0] : theme.black,
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.colors.gray[3] : theme.black,
  },
}));

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size="1.2rem" />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size="1.2rem" />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description} size={13} weight={500}>
          {description}
        </Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  { title: "Email", description: "frnkmendoza101@gmail.com", icon: IconAt },
  //   { title: "Phone", description: "+49 (800) 335 35 35", icon: IconPhone },
  {
    title: "Github",
    description: "https://github.com/frank-mendoza",
    icon: GithubIcon,
  },
  {
    title: "LinkedIn Account",
    description: "https://linkedin.com/in/frank-mendoza-382213207",
    icon: IconBrandLinkedin,
  },
  {
    title: "Messenger Account",
    description: "https://m.me/fank.mendoza.965580",
    icon: IconBrandMessenger,
  },
  {
    title: "Whatsapp Account",
    description: "https://wa.me/639506648307",
    icon: IconBrandWhatsapp,
  },
  {
    title: "Skype",
    description: "https://join.skype.com/invite/xX4Vy6VXFaP0",
    icon: IconBrandSkype,
  },
];

export function ContactIconsList({
  data = MOCKDATA,
  variant,
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

export function ContactIcons() {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white,
        })}
      >
        <ContactIconsList />
      </Box>

      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${
            theme.colors[theme.primaryColor][6]
          } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
        })}
      >
        <ContactIconsList variant="white" />
      </Box>
    </SimpleGrid>
  );
}
