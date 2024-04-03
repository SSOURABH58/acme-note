import Header from "@/components/Header";
import Slice1 from "@/components/Slice1";
import Slice2 from "@/components/Slice2";
import Slice3 from "@/components/Slice3";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" relative flex flex-1 min-h-screen flex-col   bg-primBg">
      <Header className={"absolute w-full z-50"} />
      <div className="h-screen overflow-scroll snap-y snap-proximity ">
        <Slice1 />
        <Slice2 />
        <Slice3 />
      </div>
    </main>
  );
}
