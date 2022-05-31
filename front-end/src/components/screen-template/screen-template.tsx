import { ReactNode } from "react";
import NavBar from "../molecules/nav-bar/navbar";

interface IScreenProps {
  children?: ReactNode;
  classStyle?: string;
  backDrop?: boolean;
}

const ScreenTemplate = ({ children, classStyle, backDrop }: IScreenProps) => {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <NavBar />
      <section className={`${classStyle} flex-1`}>{children}</section>
    </main>
  );
};

export default ScreenTemplate;
