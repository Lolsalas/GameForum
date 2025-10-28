import MainMenuTable from "./MainMenuTable";
import TopBar from "../TopBar/TopBar";
import SideBar from "../SideBar/SideBar";

function MainMenu()
{
    return(
        <div>
        <TopBar/>
        <SideBar/>
        <h1 id='ForumTitle'>World of Warcraft Forum</h1>
        <MainMenuTable/>
        </div>
    )
}
export default MainMenu