import React from "react";
import "./App.css";
import SearchComponent from "./components/SeachComponentCard";

function App() {
  return (
    <div className="App">
      <SearchComponent
        fullName="Gina Snelly"
        userId={1234}
        profileImageUrl="https://randomuser.me/api/portraits/women/55.jpg"
        trust="75"
      />
    </div>
  );
}

export default App;
