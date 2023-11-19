import { useDroppable } from "@dnd-kit/core";
import React from "react";

export default function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  // const style = {
  //   color: isOver ? "green" : undefined,
  // };

  return (
    <div
      ref={setNodeRef}
      // style={style}
      className={` w-80  flex justify-center items-center border-2 border-dashed ${
        isOver
          ? "border-neutral-600 text-neutral-600"
          : "border-neutral-100 text-neutral-100"
      }`}
    >
      {props.children}
    </div>
  );
}
