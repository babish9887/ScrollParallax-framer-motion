import Image from "next/image";
import Paragraph from "./components/Paragraph";
import Word from "./components/Word";
import Character from "./components/Character";
const paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
export default function Home() {
  return (
      <>
      <div className="h-[100vh] flex justify-center items-center text-white text-2xl">Scroll</div>
      <div className="flex justify-center items-center h-[100vh]">
            <Paragraph value={paragraph}/>
      </div>
      <div className="flex justify-center items-center h-[100vh]">
            <Word value={paragraph}/>
      </div>
      <div className="flex justify-center items-center h-[100vh]">
            <Character value={paragraph}/>
      </div>
      <div className="h-[50vh]"/>

      </>
  );
}
