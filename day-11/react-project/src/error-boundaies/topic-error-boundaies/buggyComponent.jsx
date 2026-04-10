// Buggy component to test

import { useState } from "react";

export default function BuggyComponent() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Crash!");
  }

  return (
    <div>
      <p>Click to crash</p>
      <button onClick={() => setCrash(true)}>Crash</button>
    </div>
  );
}