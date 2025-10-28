
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import HomepageRows from "./homepagerows";

const headers=
[
    {title: 'World of Warcraft', href:'/WorldofWarcraft'},
    {title: 'Dead by Daylight',href:'/DeadbyDaylight'},
    {title: 'Hollow Knight',href:'/HollowKnight'},
    {title: 'Fallout 4',href:'/Fallout4'},
    {title: 'Persona 5', href:'/Persona5'}
]


function Homepage()
{
    return(
        <div id='Homepage'>
            <TopBar/>
            <SideBar/>
            <h1 id='TRFheader'>Trending Forums</h1>
            <table id='MainTable'>
                <tbody>
                {headers.map((row,index)=>(
                    <HomepageRows key={index} href={row.href} header={row.title}/>)
                )}
                </tbody>
            </table>
        </div>
    )
}

export default Homepage