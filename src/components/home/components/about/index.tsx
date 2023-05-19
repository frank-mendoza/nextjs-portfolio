/* eslint-disable react/no-unescaped-entities */
import {
  Title,
  Text,
  Button,
  Container,
  rem,
  SimpleGrid,
  Group,
  Badge,
  Card,
  Grid,
  Col,
  ThemeIcon,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie,  IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from "@tabler/icons-react";

import useStyles from './About.styles'

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

  const features2 = [
    {
      icon: IconReceiptOff,
      title: 'React.JS',
      description: 'Experienced working as a Reactjs Developer',
    },
    {
      icon: IconFileCode,
      title: 'TypeScript',
      description: 'Experienced working with TypeScript',
    },
    {
      icon: IconCircleDotted,
      title: 'NextJS',
      description:
        'Experienced using nextjs as framework of reactjs which provides faster and advanced performance in development and deployment',
    },
    {
      icon: IconFlame,
      title: 'Redux Toolkit',
      description:
        'Has also experienced using redux toolkit to build larger and complex web apps ',
    },
  ]

  const items = features2.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: '#FFF3BF', to: '#FCC419' }}
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
    
    <>
      <Container className={classes.wrapper} size={1000}>
        <div className={classes.inner}>
          <Group position="center">
            <Badge variant="filled" size="lg">
              Best company ever
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
      <Container className={classes.wrapper}  size={1000}>
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Title className={classes.title} ta={'left'} order={2}>
              Frontend technology and frameworks used
            </Title>
            <Text c="dimmed">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <Button
              variant="gradient"
              gradient={{ deg: 133, from: "#FFF3BF", to: "#FCC419" }}
              size="lg"
              radius="md"
              mt="xl"
            >
              Get started
            </Button>
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
    </>
  );
};

export default About;
