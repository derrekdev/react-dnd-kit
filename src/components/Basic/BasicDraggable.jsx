import { useDraggable } from "@dnd-kit/core";
import React from "react";

export default function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`text-4xl px-8 py-2  bg-red-400 h-40 flex justify-center items-center`}
    >
      {props.children}
    </div>
  );
}
