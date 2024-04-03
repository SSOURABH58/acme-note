import AIOrigination from "@/components/AIOrigination";
import AllNotes from "@/components/AllNotes";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import NotesGrid from "@/components/NotesGrid";
import Preview from "@/components/Preview";
import SigUpButton from "@/components/SigUpButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" relative flex flex-1 min-h-screen flex-col bg-primBg items-center gap-14">
      <div className="h-9" />
      <Header className={"sticky w-full z-50"} />
      <Intro />
      <Preview />
      <AIOrigination />
      <AllNotes />
      <Features />
      <NotesGrid />
      <SigUpButton />
      {/* <Footer/> */}
    </main>
  );
}
