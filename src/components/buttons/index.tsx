import { Button, useMantineColorScheme } from "@mantine/core";
import React from "react";

type ButtonProps = {
  className?: string;
  text: string;
  size?: string;
  type?: 'button' | 'submit' | 'reset';
  radius?: string;
  onClick?: (event: React.MouseEvent) => void;
};
const CustomButton = ({ className, text, onClick,type, ...props }: ButtonProps) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Button
      variant={colorScheme === 'dark' ? 'outline' : "gradient"}
      color="yellow"
      gradient={{ deg: 133, from: "#e67500", to: "#ecbd2c" }}
      onClick={onClick}
      className={className}
      type={type}
      {...props}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
