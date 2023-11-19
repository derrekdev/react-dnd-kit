import React from "react";

export default function Header() {
  return (
    <header className="text-left w-full py-4">
      {/* <Link to="..">Home</Link> */}
      <a href="/" className="text-neutral-300 hover:text-neutral-600">
        Home
      </a>
    </header>
  );
}
