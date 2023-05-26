import { useEffect, useState } from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  List,
  ThemeIcon,
  rem,
  Badge,
  Group,
  Button,
  useMantineColorScheme,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import { getDatabase, onValue, ref } from "firebase/database";
import firebaseApp from "@/firebase/firebase";
import { ItemProps } from "@/types/index.types";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.sm} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    // maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.colors.yellow[1],
    color: theme.colors.dark[5],
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
  imageWrapper: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[0],
  },
}));

export type PageParams = Record<string, string | string[]>;

const ProjectDetails = () => {
  const { classes } = useStyles();
  const db = getDatabase(firebaseApp);
  const { colorScheme } = useMantineColorScheme();
  const [itemDetails, setItemDetails] = useState<ItemProps | null>(null);

  useEffect(() => {
    const recordRef = ref(db, "/porfolio/");
    const location = window.location.pathname;
    let deletedPArt = "/projects/";
    let regex = new RegExp(deletedPArt, "g");
    let modifiedString = location.replace(regex, "");

    onValue(recordRef, (data) => {
      const record = data.val();
      const newData = [];

      for (let id in record) {
        newData.push({ id, ...record[id] });
      }

      const filteredData = newData.filter(
        (status) => status.active === true && status.id === modifiedString
      );
      setItemDetails(filteredData[0]);
    });
  }, [db]);

  return (
    <Container size={1000} py="xl">
      <div className={classes.inner}>
        <Group position="center"  mr={50}  px={60} className={classes.imageWrapper}>
          <Image
            src={itemDetails?.image}
            //   className={classes.image}
            alt=""
            //   fit="contain"
            // mt={30}
            // height={150}
            width={200}
          />
        </Group>
        <div className={classes.content}>
          {/* <Text size={16} weight={700} tt="uppercase">
              Project Name
            </Text> */}
          {/* <Text mb={0}>
              {itemDetails?.type === 0 ? "Personal project" : "Part of a Team"}
            </Text> */}
          <Title className={classes.title} mt={10}>
            {itemDetails?.title}
            {/* <span className={classes.highlight}>{itemDetails?.title}</span> */}
          </Title>
          <Text color="dimmed" mt="md" maw={450}>
            {itemDetails?.details.split(",").map((strng) => (
              <Badge
                key={strng}
                mr="sm"
                mt="sm"
                color="yellow"
                variant="outline"
                // variant="gradient"
                // gradient={{ from: "orange", to: "red" }}
              >
                {strng}
              </Badge>
            ))}
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" color="yellow">
                <IconCheck size={rem(12)} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all
              components and hooks export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you
              can use Mantine in any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when
              user navigates with keyboard
            </List.Item>
          </List>
          <Group mt={30}>
            <Button
              size="lg"
              component="a"
              href={itemDetails?.link}
              target="_blank"
              variant={colorScheme === "dark" ? "outline" : "gradient"}
              gradient={{ deg: 133, from: "#e67500", to: "#ecbd2c" }}
              color="yellow"
            >
              Visit Site
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetails;
