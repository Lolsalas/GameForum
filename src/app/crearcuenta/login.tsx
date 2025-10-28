import TopBar from "../TopBar/TopBar";
import SideBar from "../SideBar/SideBar";
import '../iniciosesion/login.css'
import {SubmitHandler, useForm} from "react-hook-form";


function Login()
{
    return(
        <div id="login">
            <TopBar/>
            <SideBar/>
            <form>
                <h1>Create Profile</h1>
                <label htmlFor="fname">Nombre:</label><br/>
                <input type="text" name="fname" id="fname" /><br/>
                <label htmlFor="sname">Apellidos:</label><br/>
                <input type="text" name="sname" id="sname" /><br/>
                <label htmlFor="uname">Username:</label><br/>
                <input type="text" name="uname" id="uname" /><br/>
                <label htmlFor="pword">Password:</label><br/>
                <input type="text" name="pword" id="pword" /><br/>
                <button id='cbutton'>Crear Perfil</button>
            </form>
        </div>
    )
}

export default Login