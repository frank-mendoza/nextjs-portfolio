import { useState } from "react";

type AuthProps = {
  name: string;
  email: string;
};
const TSForms = () => {
  const [islog, setIsLog] = useState<AuthProps | null>(null); // optional values for states
//   const [islog, setIsLog] = useState<AuthProps>({} as AuthProps); // type assertion, use when you want to have always a value uppon loading else use above configuration

  const handleLogin = () => {
    setIsLog({
      name: "login",
      email: "login@example.com",
    });
  };

  const handleLogout = () => {
    setIsLog(null);
  };
  return (
    <>
        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogout}>handleLogout </button>

        {/* if type assertion, removed '?'' */}
      <div>{islog?.name}</div>
      <div>{islog?.email}</div>
    </>
  );
};

export default TSForms;
