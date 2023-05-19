import { DemoProps } from "@/types/index.types";

const Demo = ({
  children,
  handleClick,
  handleChange,
  value,
  style,
  name,
}: DemoProps) => {
  return (
    <>
      <h1>
        {name.first} {name.last}
      </h1>
      <div style={style}>{children}</div>
      <button onClick={(e) => handleClick(e, 1)}>Click</button>
      <input type="text" onChange={handleChange} value={value} />
    </>
  );
};

export default Demo;
