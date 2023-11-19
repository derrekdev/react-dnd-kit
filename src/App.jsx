import "./App.css";

function App() {
  const currentLink = [
    {
      name: "Basic 1",
      linkSrc: "/basic",
    },
    {
      name: "Basic 2",
      linkSrc: "/",
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <h1 className="pb-14">React Drag and Drop Kit</h1>
        <p className="pb-2">Click on the link below for the types of dnd</p>
        <ul className="list-none flex flex-col items-center gap-y-4">
          {currentLink.map((link, index) => (
            <li key={index} className="">
              <a
                key={index}
                href={link.linkSrc}
                // target="_blank"
                className=" text-2xl hover:text-neutral-600"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <li className="">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
          </li>
          <li>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default App;
