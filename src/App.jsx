import "./App.css";

function App() {
  const currentLink = [
    {
      name: "Basic Drag and Drop",
      linkSrc: "/basic",
    },
    {
      name: "Basic Drop and Drop on both panels",
      linkSrc: "/basic2",
    },
    {
      name: "Basic Drop and Drop on multiple panels",
      linkSrc: "/basic3",
    },
    {
      name: "Drop to correct panel",
      linkSrc: "/droponcorrect",
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="pb-14">React Drag and Drop Kit</h1>
      <p className="pb-2">Click on the link below for the types of dnd</p>
      <ul className="flex flex-col items-center list-none gap-y-4">
        {currentLink.map((link, index) => (
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
  );
}

export default App;
