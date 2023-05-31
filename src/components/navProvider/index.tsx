import FooterSocial from "../footer";
import HeaderMiddle from "../navbar";

type ProviderProps = {
  children: React.ReactNode;
};

const NavProvider = ({ children }: ProviderProps) => {
  return (
    <>
      <HeaderMiddle />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
      <FooterSocial />
    </>
  );
};

export default NavProvider;
