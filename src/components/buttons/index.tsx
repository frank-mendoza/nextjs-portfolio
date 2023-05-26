import { Button, useMantineColorScheme } from "@mantine/core";
import React from "react";

type ButtonProps = {
  className?: string;
  text: string;
  size?: string;
  radius?: string;
  onClick?: (event: React.MouseEvent) => void;
};
const CustomButton = ({ className, text, onClick, ...props }: ButtonProps) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Button
      variant={colorScheme === 'dark' ? 'outline' : "gradient"}
      color="yellow"
      gradient={{ deg: 133, from: "#e67500", to: "#ecbd2c" }}
      onClick={onClick}
      className={className}
      {...props}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
