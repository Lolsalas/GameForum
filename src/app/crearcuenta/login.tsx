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
            <form action="http://localhost:8081/user" method="POST">
                <h1>Create Profile</h1>
                {/* <label htmlFor="fname">Nombre:</label><br/>
                <input type="text" name="Username" id="fname" /><br/>
                <label htmlFor="sname">Apellidos:</label><br/>
                <input type="text" name="sname" id="sname" /><br/> */}
                <label htmlFor="uname">Username:</label><br/>
                <input type="text" name="Username" id="uname" /><br/>
                <label htmlFor="pword">Password:</label><br/>
                <input type="text" name="Password" id="pword" /><br/>
                <label htmlFor="email">Email:</label><br/>
                <input type="text" name="Email" id="email" /><br/>
                <button id='cbutton'>Crear Perfil</button>
            </form>
        </div>
    )
}

export default Login