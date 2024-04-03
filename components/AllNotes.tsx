import Image from "next/image";
import React from "react";
import NotesSticker from "./NotesSticker";

const notes = [
  {
    color: "#6DC7FF",
    title: "Meeting Notes",
    description: "Notes from the team meeting held on Monday.",
  },
  {
    color: "#E6ABFF",
    title: "Project Update",
    description: "Update on the progress of the project.",
  },
  {
    color: "#1A6DFF",
    title: "Task List",
    description: "List of tasks to be completed this week.",
  },
  {
    color: "#C822FF",
    title: "Bug Report",
    description: "Report of the bugs found in the latest release.",
  },
  {
    color: "#6DC7FF",
    title: "Meeting Notes",
    description: "Notes from the team meeting held on Monday.",
  },
  {
    color: "#E6ABFF",
    title: "Project Update",
    description: "Update on the progress of the project.",
  },
  {
    color: "#1A6DFF",
    title: "Task List",
    description: "List of tasks to be completed this week.",
  },
  {
    color: "#C822FF",
    title: "Bug Report",
    description: "Report of the bugs found in the latest release.",
  },
];

function AllNotes() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="relative !h-[280px] w-full overflow-x-scroll">
        <div className="flex absolute left-0 gap-8 overflow-x-scroll">
          {notes.map((note, index) => (
            <NotesSticker
              key={index}
              color={note.color}
              title={note.title}
              description={note.description}
            />
          ))}
        </div>
      </div>
      <p className="w-7/12 text-textColorLite/50 text-[16px] text-center">
        Acme Note is a note-taking app that helps you to take notes, organize
        them, and keep them safe. With Acme Note, you can easily create new
        notes, categorize them using tags, and search for specific notes using
        keywords. The app also provides a rich text editor that allows you to
        format your notes with headings, lists, and other styling options.
      </p>
    </div>
  );
}

export default AllNotes;
