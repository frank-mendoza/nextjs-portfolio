import React from "react";
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
  Box,
  Group,
  Image,
} from "@mantine/core";

import useStyles from "./About.styles";
import { features } from "@/mockData/features";

const Frameworks = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();

  const items = (data: any) =>
    data.map((feature: any) => (
      <Group key={feature.title} style={{ flexDirection: "column" }}>
        <ThemeIcon
          size={80}
          radius="md"
          // variant="outline"
          color={colorScheme === "dark" ? "" : feature.color}
          // gradient={{ deg: 133, from: "#1d1e30", to: "black" }}
        >
          {feature.image ? (
            <Image width={50} src={feature.icon} alt="" />
          ) : (
            <feature.icon size={rem(50)} stroke={1.5} />
          )}
        </ThemeIcon>
        <Text fz="sm" fw={500}>
          {feature.title}
        </Text>
        {/* <Text c="dimmed" fz="sm">
        {feature.description}
      </Text> */}
      </Group>
    ));

  type IGridComponent = { type: "be" | "fe" };
  const GridComponent = ({ type }: IGridComponent) => {
    let data = [];
    if (type === "fe") {
      data = features.filter((feature) => feature.type === "fe");
    } else {
      data = features.filter((feature) => feature.type === "be");
    }
    return (
      <Grid gutter={80} align="center">
        <Col span={12}>
          <Title
            align="center"
            className={classes.title}
            ta={"center"}
            order={2}
          >
            {type === "fe" ? (
              <Text span>
                Frontend technology <br />
                and frameworks used
              </Text>
            ) : (
              <Text span>
                Knowledgable in these
                <br />
                Stacks and Technologies
              </Text>
            )}
          </Title>
          <Text align="center" c="dimmed" mb="md">
            {type === "fe" ? (
              <Text span>
                These tools helps me build web apps faster <br /> and this are
                the tech stacks I currently experienced in.
              </Text>
            ) : (
              <Text span>
                These are the tech stacks that I have experienced <br />
                working on and knowledgable on how it works
              </Text>
            )}
          </Text>
        </Col>
        <Col span={12}>
          <SimpleGrid
            cols={4}
            spacing={30}
            mb={20}
            breakpoints={[{ maxWidth: "md", cols: 2 }]}
          >
            {items(data)}
          </SimpleGrid>
        </Col>
      </Grid>
    );
  };

  return (
    <Container className={classes.wrapper} size={1000}>
      <GridComponent type="fe" />
      <GridComponent type="be" />
    </Container>
  );
};

export default Frameworks;
