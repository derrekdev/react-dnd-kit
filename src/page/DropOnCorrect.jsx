import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import React, { useReducer } from "react";

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px,0)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="flex items-center justify-center p-10 text-4xl border-2 border-solid w-60 bg-neutral-700 border-neutral-200 rounded-xl"
    >
      <span> 3</span>
    </div>
  );
}

function Droppable(props) {
  const isNone = props.isNone ?? false;
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <>
      {props.title && <p>{props.title}</p>}
      <div
        ref={setNodeRef}
        className={`basis-full flex justify-center items-center rounded-2xl transition-all
        ${props.isDrop ? "" : "border-dashed"}

        ${isNone ? "" : "border-2"}

        ${
          isOver
            ? "border-neutral-600 text-neutral-600"
            : props.isCorrect && props.isDrop
            ? "ring-1 ring-green-600/30 border-green-600/30 shadow-[0_0_20px_2px_rgba(22,163,74,.5)]"
            : !props.isCorrect && props.isDrop
            ? "ring-1 ring-red-600/30 border-red-600/30 shadow-[0_0_20px_2px_rgba(220,38,38,.5)]"
            : "border-neutral-100 text-neutral-100"
        }
      `}
      >
        <span>{props.children}</span>
      </div>
    </>
  );
}

export default function DropOnCorrect() {
  function droppedReducer(state, action) {
    const currentState = [
      { isDropped1: false },
      { isDropped2: false },
      { isDropped3: false },
    ];

    switch (action.type) {
      case "1":
        return { ...currentState, isDropped1: true };
      case "2":
        return { ...currentState, isDropped2: true };
      case "3":
        return { ...currentState, isDropped3: true };
      default:
        return { ...currentState };
    }
  }

  const [state, dispatch] = useReducer(droppedReducer, [
    { isDropped1: false },
    { isDropped2: false },
    { isDropped3: false },
  ]);

  const droppableArray = [
    { id: "droppable1", title: "1 + 1 =", state: state.isDropped1 },
    { id: "droppable2", title: "1 + 2 =", state: state.isDropped2 },
    { id: "droppable3", title: "1 + 3 =", state: state.isDropped3 },
  ];

  const handleDragEnd = (event) => {
    const { over } = event;
    if (over && over.id === "droppable1") dispatch({ type: "1" });
    else if (over && over.id === "droppable2") dispatch({ type: "2" });
    else if (over && over.id === "droppable3") dispatch({ type: "3" });
    else dispatch({ type: "4" });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex items-center pb-4 transition-all h-14">
        {(state.isDropped1 || state.isDropped2 || state.isDropped3) && (
          <span
            className={`w-full p-2 transition-all  ${
              state.isDropped2 ? "bg-green-400" : "bg-red-400"
            } text-neutral-900 font-semibold block`}
          >
            Your answer is correct
          </span>
        )}
      </div>
      <div className="flex flex-row w-[800px] gap-4">
        <div className="h-[500px] w-1/2 flex justify-center items-center border-2">
          <Droppable
            id="droppable0"
            isNone={true}
            isDrop={false}
            isCorrect={false}
          >
            {!state.isDropped1 && !state.isDropped2 && !state.isDropped3 ? (
              <Draggable />
            ) : (
              "Drop here incase you don't want to answer any"
            )}
          </Droppable>
        </div>
        <div className="flex flex-col items-stretch w-1/2 gap-2">
          {droppableArray.map((item, index) => (
            <Droppable
              key={index}
              id={item.id}
              isDrop={item.state}
              title={item.title}
              isCorrect={item.id === "droppable2" && item.state}
            >
              {item.state ? <Draggable /> : "Drop you answer here"}
            </Droppable>
          ))}
        </div>
      </div>
      <p className="pt-4">Drop the item on the correct box</p>
    </DndContext>
  );
}
