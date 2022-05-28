import { ReactNode } from "react";
import NavBar from "../molecules/navbar";

interface IScreenProps {
  children?: ReactNode;
}

const ScreenTemplate = ({ children }: IScreenProps) => {
  return (
    <main className="flex flex-col h-screen">
      <NavBar />
      <section className="bg-[red] flex-1">{children}</section>
    </main>
  );
};

export default ScreenTemplate;
