import React from "react";
import { CustomButton } from "@/components";
import {
  Col,
  Grid,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  rem,
  Container,
  useMantineColorScheme,
} from "@mantine/core";

import {
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandRedux,
  IconBrandReact,
} from "@tabler/icons-react";

import useStyles from "./About.styles";

const Frameworks = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();

  const features2 = [
    {
      icon: IconBrandReact,
      title: "React.JS",
      description: "Experienced working as a Reactjs Developer",
      color: "blue",
    },
    {
      icon: IconBrandTypescript,
      title: "TypeScript",
      description: "Experienced working with TypeScript",
      color: "blue",
    },
    {
      icon: IconBrandNextjs,
      title: "NextJS",
      description:
        "Experienced using nextjs as framework of reactjs which provides faster and advanced performance in development and deployment",
      color: "dark",
    },
    {
      icon: IconBrandRedux,
      title: "Redux Toolkit",
      description:
        "Has also experienced using redux toolkit to build larger and complex web apps ",
      color: "violet",
    },
  ];

  const items = features2.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        // variant="outline"
        color={colorScheme === "dark" ? "" : feature.color}
        // gradient={{ deg: 133, from: "#1d1e30", to: "black" }}
      >
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container className={classes.wrapper} size={1000}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} ta={"left"} order={2}>
            Frontend technology and frameworks used
          </Title>
          <Text c="dimmed" mb="md">
            Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation
          </Text>

          {/* <CustomButton
            text="Get started"
            size="lg"
            onClick={() => console.log("")}
          /> */}
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </Container>
  );
};

export default Frameworks;
