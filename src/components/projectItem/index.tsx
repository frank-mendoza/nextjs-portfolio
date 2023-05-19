import {
  AspectRatio,
  Card,
  Image,
  SimpleGrid,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { useEffect, useState } from "react";

type ProjectsProps = {
  pageType?: "project";
};

type DataProps = {
  title: string;
  image: string;
  date: string;
};

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
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

export const mockdata = [
  {
    title: "Top 10 places to visit in Norway this summer",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "React.js, TypeScript, Redux Toolkit",
  },
  {
    title: "Best forests to visit in North America",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 27, 2022",
  },
  {
    title: "Hawaii beaches review: better than you think",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 9, 2022",
  },
  {
    title: "Mountains at night: 12 best locations to enjoy the view",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 12, 2022",
  },
];

const ProjectItem = ({ pageType }: ProjectsProps) => {
  const { classes } = useStyles();
  const [data, setData] = useState<[] | any>([]);

  useEffect(() => {
    const sliceddata = pageType === "project" ? mockdata : mockdata.slice(0, 4)

    setData(sliceddata);
  }, [pageType]);

  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
      {data.length > 0 ? (
        data.map((article: DataProps) => (
          <Card
            key={article.title}
            p="md"
            radius="md"
            component="a"
            href="#"
            className={classes.card}
          >
            <AspectRatio ratio={1920 / 1080}>
              <Image src={article.image} alt="" />
            </AspectRatio>
            <Text
              color="dimmed"
              size="xs"
              transform="capitalize"
              weight={700}
              mt="md"
            >
              {article.date}
            </Text>
            <Text className={classes.title} mt={5}>
              {article.title}
            </Text>
          </Card>
        ))
      ) : (
        <Text color="dimmed">No data available</Text>
      )}
    </SimpleGrid>
  );
};

export default ProjectItem;
