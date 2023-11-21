import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import React, { useState } from "react";

function Draggable(props) {
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

function Droppable(props) {
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

export default function Basic() {
  // return (
  //   <DndContext>
  //     <BasicDraggable />
  //     <BasicDroppable />
  //   </DndContext>
  // );

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>
      <span>Drag me</span>
    </Draggable>
  );

  const droppableMarkup = <span>Drop here</span>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row w-full gap-4">
        {/* {draggableMarkup} */}
        <div className="w-[300px] h-[500px] p-10 border-neutral-400 border-2">
          {!isDropped ? draggableMarkup : null}
        </div>
        <Droppable>{isDropped ? draggableMarkup : droppableMarkup}</Droppable>
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
}
