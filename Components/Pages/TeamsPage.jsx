import React from "react";
import Teams from "../Teams/Teams";

export default function TeamsPage() {
  return (
    <div>
      <header className="app-header">
        <h1>Meet Our MLSC Team</h1>
      </header>
      <main>
        <Teams />
      </main>
    </div>
  );
}