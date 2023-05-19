"use-client";

import { ProjectItem } from "@/components";
import {
  createStyles,
  SimpleGrid,
  Container,
  Title,
  rem,
  Button,
  Group,
} from "@mantine/core";
import { useRouter } from "next/navigation";

const useStyles = createStyles((theme) => ({
  header: {
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
}));

const ProjectItems = () => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Container size={1000} py="xl">
      <Title order={2} className={classes.header} ta="center" mb={30}>
        Works
      </Title>

      <ProjectItem />

      <Group position="center">
        <Button
          variant="gradient"
          gradient={{ deg: 133, from: "#FFF3BF", to: "#FCC419" }}
          size="lg"
          radius="md"
          mt="xl"
          onClick={() => router.push("./projects")}
        >
          View more
        </Button>
      </Group>
    </Container>
  );
};

export default ProjectItems;
