export type Name = {
  first: string;
  last: string;
};

//children props in ts
export type DemoProps = {
  // children: string
  value: string;
  children?: React.ReactNode; // ffor jjsx element that want to be added as child
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  style: React.CSSProperties;

  name: Name;
};

export type HeroPageProps = {
  status: "success" | "failure" | "loading"; // union of string literals
};

export type ItemProps = {
  details: string;
  image: string;
  link: string;
  title: string;
  id: string;
  company: string;
  type: number;
  active: boolean;
};

export type ContactProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
}
