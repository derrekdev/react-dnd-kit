import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="h-40">React Drag and Drop Kit</h1>
      <p className="pb-8">Click on the link below for the types of dnd</p>
      <ul className="list-none flex flex-col items-center gap-y-4">
        {currentLink.map((link, index) => (
          <li className="">
            <a
              key={index}
              href={link.linkSrc}
              target="_blank"
              className="text-neutral-300 text-2xl"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li className="">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </li>
        <li>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </li>
      </ul>
    </div>
  );
}
