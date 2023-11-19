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

  const droppableMarkup = <div className="">Drop here</div>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row gap-10 w-full">
        {/* {draggableMarkup} */}
        {!isDropped ? draggableMarkup : null}
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
