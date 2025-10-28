import React from "react"
import TopBar from "./app/TopBar/TopBar"
import SideBar from "./app/SideBar/SideBar"
import MainMenu from "./app/MainMenuTable/MainMenu";
import Homepage from "./app/homepage/homepage";


function App() {

  return (
    <div>
    <TopBar/>
    <SideBar/>
      <Homepage/>
    </div>
  );
}

export default App
