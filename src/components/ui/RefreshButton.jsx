import React from "react";

export default function RefreshButton() {
  const handleRefresh = () => {
    location.reload();
  };
  return (
    <div>
      <button
        onClick={() => handleRefresh()}
        className="transition-all hover:bg-neutral-800"
      >
        Refresh Page
      </button>
    </div>
  );
}
