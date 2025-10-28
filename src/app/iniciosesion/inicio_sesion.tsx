import TopBar from '../TopBar/TopBar'
import SideBar from "../SideBar/SideBar";
import './login.css'
import Link from 'next/link';

function Crear_account()
{
    return(
        <div id="inicio">
            <TopBar/>
            <SideBar/>
            <form>
                <h1>Log In</h1>
                <label htmlFor="uname">Username:</label><br/>
                <input type="text" name="uname" id="uname" /><br/>
                <label htmlFor="pword">Password:</label><br/>
                <input type="text" name="pword" id="pword" />
                <Link id='CreateMessage' href='/crearcuenta'>Not a member? Create an account!</Link>
            </form>
        </div>
    )
}

export default Crear_account