import { ItemProps } from "@/types/index.types";
import {
  AspectRatio,
  Box,
  Card,
  Image,
  SimpleGrid,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import { useEffect, useState } from "react";

type ProjectsProps = {
  pageType?: "project";
  list: ItemProps[] | [];
};

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

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
    },
  },
  imageWrapper: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[0],
  },
}));

const ProjectItem = ({ pageType, list }: ProjectsProps) => {
  const { classes } = useStyles();
  const [dataList, setDataList] = useState<ItemProps[] | []>([]);

  useEffect(() => {
    const sliceData = pageType === "project" ? list : list.slice(0, 4);
    setDataList(sliceData);
  }, [list, pageType]);

  return (
    <>
      <Title
        order={2}
        className={classes.header}
        ta={pageType === "project" ? "left" : "center"}
        pt={30}
        mb={30}
      >
        Recent Projects
      </Title>
      {dataList?.length > 0 ? (
        <SimpleGrid
          mb={30}
          cols={2}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          {dataList.map((article) => (
            <Card
              key={article.title}
              p="md"
              radius="md"
              component="a"
              href={article.link}
              target="_blank"
              className={classes.card}
            >
              <AspectRatio ratio={1920 / 1080} className={classes.imageWrapper}>
                <Image src={article.image} alt="" fit="scale-down" />
              </AspectRatio>
              <Text className={classes.title} mt="md">
                {article.title}
              </Text>
              <Text
                color="dimmed"
                size="xs"
                transform="capitalize"
                weight={700}
                mt={5}
              >
                {article.details}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      ) : (
        <Text color="dimmed" align="center" py="xl" my={100}>
          No data available
        </Text>
      )}
    </>
  );
};

export default ProjectItem;
