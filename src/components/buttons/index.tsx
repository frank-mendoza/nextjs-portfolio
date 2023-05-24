import { Button } from "@mantine/core";
import React from "react";

type GradientProps = {
  deg: number;
  from: string;
  to: string;
};

type ButtonProps = {
  className?: string;
  text: string;
  size?: string;
  radius?: string;
  onClick: (event: React.MouseEvent) => void;
};
const CustomButton = ({ className, text, onClick, ...props }: ButtonProps) => {
  return (
    <Button
      variant="gradient"
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
