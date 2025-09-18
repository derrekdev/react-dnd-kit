import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { useState } from "react";

function Draggable(props) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
  });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
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
      className={` h-[500px] w-[300px] flex justify-center items-center border-2 `}
    >
      {props.children}
    </div>
  );
}

export default function DragOverlayBasic() {
  const [items] = useState(["1", "2", "3", "4", "5"]);
  const [activeId, setActiveId] = useState(null);
  const [isDragValue, setIsDragValue] = useState("");
  const [isDropped1, setIsDropped1] = useState(false);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-[160px] gap-4">
          {items.map((id) => (
            <div key={id}>
              {isDragValue !== id ? (
                <Draggable key={id} id={id}>
                  <div
                    value={`Item ${id}`}
                    className="p-10 border-2 border-neutral-100 basis-full"
                  >
                    Drag Me {id}
                  </div>
                </Draggable>
              ) : null}
            </div>
          ))}
        </div>

        <DragOverlay
          modifiers={[restrictToWindowEdges]}
          dropAnimation={{
            duration: 300,
            easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
          }}
        >
          {activeId ? (
            <div
              value={`Item ${activeId}`}
              className="p-10 border-2 border-neutral-100 basis-full bg-neutral-600"
            >
              Drop Me {activeId}
            </div>
          ) : null}
        </DragOverlay>
        <Droppable id="droppable1">
          {isDropped1 ? (
            <Draggable id={isDragValue}>
              <div
                value={`Item ${isDragValue}`}
                className="p-10 border-2 border-neutral-100 basis-full "
              >
                Dropped {isDragValue}
              </div>
            </Draggable>
          ) : (
            <span>Drop Here</span>
          )}
        </Droppable>
      </div>
    </DndContext>
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
    // setIsDragValue(0);
  }

  function handleDragEnd(event) {
    setActiveId(null);
    setIsDragValue(event.active.id);

    if (event.over && event.over.id === "droppable1") {
      setIsDropped1(true);
    }
  }
}
