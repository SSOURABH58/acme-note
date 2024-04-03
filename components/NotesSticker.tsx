import React from "react";

interface NotesStickerProps {
  color: string;
  title: string;
  description: string;
}

function NotesSticker({ color, title, description }: NotesStickerProps) {
  return (
    <div
      className="rounded-md overflow-hidden !w-[250px] !h-[280px] bg-sky-400 p-4"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="border-b-2 border-solid border-black/10 ">
        <input
          type="text"
          title="todo"
          className="bg-transparent w-full text-[24px] font-bold text-black"
          defaultValue={title}
        />
      </div>
      <textarea
        type="text"
        title="todo"
        className="bg-transparent w-full  text-black mt-3"
        defaultValue={description}
      />
    </div>
  );
}

export default NotesSticker;
