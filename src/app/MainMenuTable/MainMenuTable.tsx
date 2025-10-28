import React from "react";
import MainMenuTableRows from "./MainMenuTableRows";

const info_map=
[
    {header_info:'Community', row_data:['General Discussion']},
    {header_info:'Gameplay', row_data:['Quests',' Professions',' Raids']},
    {header_info:'PVP', row_data:['Arenas',' Battlegrounds']},
    {header_info:'Lore', row_data:['Story Forum', ' Pandaria Lore']}
]

function MainMenuTable()
{
    return(
            <table id="Mtable">
                <tbody>
                    {info_map.map((row,index)=>(
                        <MainMenuTableRows key={index} header_info={row.header_info} row_data={Array.isArray(row.row_data)? row.row_data:[row.row_data]}/>
                    ))}
                </tbody>
            </table>
    )
}

export default MainMenuTable