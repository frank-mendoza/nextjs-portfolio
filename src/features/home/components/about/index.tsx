/* eslint-disable react/no-unescaped-entities */
import {
  Title,
  Text,
  Container,
  rem,
  SimpleGrid,
  Group,
  Badge,
  Card,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";

import useStyles from "./About.styles";

const mockdata = [
  {
    title: "Collaborative to the team",
    description:
      "Collaboration makes work easier and relaxing as you share knowledge between teams",
    icon: IconGauge,
  },
  {
    title: "Up unto the trend in web development",
    description:
      "New and popular frameworks arises and as a frontend dev, it is very important to have access to this new framework and techs",
    icon: IconUser,
  },
  {
    title: "Willingness to learn new technologies",
    description:
      "I am not relying on my current skill instead, I always seek for a new skill to develop",
    icon: IconCookie,
  },
];

const About = () => {
  const { classes, theme } = useStyles();

  // if (props.status === 'success') {
  //   console.log('success')
  // } else if (props.status === 'failure') {
  //   console.log('failure')
  // } else if (props.status === 'loading') console.log('loading')

  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        size={rem(50)}
        stroke={2}
        color={theme.colors[theme.primaryColor][2]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container className={classes.wrapper} size={1000}>
      <div className={classes.inner}>
        <Group position="center">
          <Badge variant="filled" size="lg">
            Best thiing to know
          </Badge>
        </Group>

        <Title order={2} className={classes.title} ta="center" mt="sm">
          A developer that you might be needed
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Soft skills are import specially when you have multiple teammates to
          talk to.
        </Text>

        <SimpleGrid
          cols={3}
          spacing="xl"
          mt={50}
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          {features}
        </SimpleGrid>
      </div>
    </Container>
  );
};

export default About;
