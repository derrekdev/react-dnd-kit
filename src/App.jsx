import "./App.css";

function App() {
  const basicLink = [
    {
      name: "Drag and Drop",
      linkSrc: "/basic",
    },
    {
      name: "Drop and Drop on both panels",
      linkSrc: "/basic2",
    },
    {
      name: "Drop and Drop on multiple panels",
      linkSrc: "/basic3",
    },
    {
      name: "Drag Overlay",
      linkSrc: "/dragoverlay",
    },
  ];

  const mediumLink = [
    {
      name: "Drop to correct panel",
      linkSrc: "/droponcorrect",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <h1 className="pb-14">React Drag and Drop Kit</h1>
      <p className="pb-5">Click on the link below for the types of dnd</p>
      <div className="flex flex-row w-full gap-x-4">
        <div className="p-4 border-2 basis-full">
          <h2 className="pb-10 text-2xl">Basic</h2>
          <ul className="flex flex-col text-left list-none gap-y-4">
            {basicLink.map((link, index) => (
              <li key={index} className="">
                <a
                  key={index}
                  href={link.linkSrc}
                  // target="_blank"
                  className="text-2xl hover:text-neutral-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-2 basis-full">
          <h2 className="pb-10 text-2xl">With Functionality</h2>
          <ul className="flex flex-col list-none gap-y-4">
            {mediumLink.map((link, index) => (
              <li key={index} className="">
                <a
                  key={index}
                  href={link.linkSrc}
                  // target="_blank"
                  className="text-2xl hover:text-neutral-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
