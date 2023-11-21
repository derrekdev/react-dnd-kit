import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import React, { useState } from "react";

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  // console.log("attributes", attributes);
  // console.log("listeners", listeners);
  // console.log("setNodeRef", setNodeRef);
  // console.log("transform", transform);

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
    id: props.id,
  });

  return (
    <div
      ref={setNodeRef}
      // style={style}
      className={` h-[500px] w-[300px] flex justify-center items-center border-2  
      ${props.isDrop ? "" : "border-dashed"} 
      ${
        isOver
          ? "border-neutral-600 text-neutral-600"
          : "border-neutral-100 text-neutral-100"
      }`}
    >
      {props.children}
    </div>
  );
}

export default function Basic2() {
  const [isDropped1, setIsDropped1] = useState(true);
  const [isDropped2, setIsDropped2] = useState(false);

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable1") {
      setIsDropped1(true);
      setIsDropped2(false);
    }

    if (event.over && event.over.id === "droppable2") {
      setIsDropped2(true);
      setIsDropped1(false);
    }
  }

  const draggableMarkup = (
    <Draggable>
      <span>Drag me</span>
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row w-full gap-4">
        {/* <div className="w-[300px] h-[500px] p-10 border-neutral-400 border-2"></div> */}
        {/* <div className="w-[300px] h-[500px] p-10 border-neutral-400 border-2"></div> */}
        <Droppable isDrop={isDropped1} id="droppable1">
          {isDropped1 ? draggableMarkup : <span>Drop here</span>}
        </Droppable>
        <Droppable isDrop={isDropped2} id="droppable2">
          {isDropped2 ? draggableMarkup : <span>Drop here</span>}
        </Droppable>
      </div>
    </DndContext>
  );
}
