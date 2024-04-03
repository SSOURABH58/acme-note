import React from "react";

interface NextSliceButtonProps {
  id: string;
}

function NextSliceButton({ id }: NextSliceButtonProps) {
  return (
    <a
      href={`#${id}`}
      className="transition-all hover:animate-bounce flex flex-col items-center opacity-50 hover:opacity-100 cursor-pointer absolute bottom-5"
    >
      <p className="text-gray-500">Next Slice</p>
      <div className="size-5  border-t-0 border-l-0 rotate-45 border-[5px] rounded-md border-gray-500 " />
    </a>
  );
}

export default NextSliceButton;
