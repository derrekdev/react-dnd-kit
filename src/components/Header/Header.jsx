import React from "react";
import RefreshButton from "../ui/RefreshButton";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full py-4 text-left">
      {/* <Link to="..">Home</Link> */}
      <a href="/" className="text-neutral-300 hover:text-neutral-600">
        Home
      </a>
      <RefreshButton />
    </header>
  );
}
