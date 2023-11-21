import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import React, { useState } from "react";

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px,${transform.y}px,0)`,
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
      <span>Drag me</span>
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
      className={`basis-full flex justify-center items-center border-2  
      ${props.isDrop ? "" : "border-dashed"} 
      ${
        isOver
          ? "border-neutral-600 text-neutral-600"
          : "border-neutral-100 text-neutral-100"
      }`}
    >
      <span>{props.children}</span>
    </div>
  );
}

export default function Basic3() {
  const [isDropped1, setIsDropped1] = useState(false);
  const [isDropped2, setIsDropped2] = useState(false);
  const [isDropped3, setIsDropped3] = useState(false);

  function handleDragEnd(event) {
    const { over } = event;

    if (over && over.id === "droppable1") {
      setIsDropped1(true);
      setIsDropped2(false);
      setIsDropped3(false);
    }

    if (over && over.id === "droppable2") {
      setIsDropped1(false);
      setIsDropped2(true);
      setIsDropped3(false);
    }

    if (over && over.id === "droppable3") {
      setIsDropped1(false);
      setIsDropped2(false);
      setIsDropped3(true);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row w-[800px] gap-4">
        <div className="h-[500px] w-1/2 flex justify-center items-center border-2">
          {!isDropped1 && !isDropped2 && !isDropped3 ? <Draggable /> : null}
        </div>
        <div className="flex flex-col items-stretch w-1/2 gap-2">
          <Droppable id="droppable1" isDrop={isDropped1}>
            {isDropped1 ? <Draggable /> : "Drop Here"}
          </Droppable>
          <Droppable id="droppable2" isDrop={isDropped2}>
            {isDropped2 ? <Draggable /> : "Drop Here"}
          </Droppable>
          <Droppable id="droppable3" isDrop={isDropped3}>
            {isDropped3 ? <Draggable /> : "Drop Here"}
          </Droppable>
        </div>
      </div>
    </DndContext>
  );
}
