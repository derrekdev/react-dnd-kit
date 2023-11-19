import { DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import BasicDraggable from "../components/Basic/BasicDraggable";
import BasicDroppable from "../components/Basic/BasicDroppable";

export default function Basic() {
  // return (
  //   <DndContext>
  //     <BasicDraggable />
  //     <BasicDroppable />
  //   </DndContext>
  // );

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <BasicDraggable>
      <span>Drag me</span>
    </BasicDraggable>
  );

  const droppableMarkup = <span>Drop here</span>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row gap-4 w-full">
        {/* {draggableMarkup} */}
        <div className="w-[300px] h-[500px] p-10 border-neutral-400 border-2">
          {!isDropped ? draggableMarkup : null}
        </div>
        <BasicDroppable>
          {isDropped ? draggableMarkup : droppableMarkup}
        </BasicDroppable>
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
}
