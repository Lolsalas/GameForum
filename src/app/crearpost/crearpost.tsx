import TopBar from "../TopBar/TopBar";
import SideBar from "../SideBar/SideBar";
import '../iniciosesion/login.css'

function Crearpost()
{
    return <div id='crearpost'>
        <TopBar/>
        <SideBar/>
        <form>
            <label htmlFor="post">Escribe tu post: </label><br/>
            <input type="text" name="Post_Text" id="pst"/><br/>
        </form>
    </div>
}

export default Crearpost