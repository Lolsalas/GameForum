import React from "react";

interface RowInfo{
    header_info:string
    row_data:string[]
}


function MainMenuTableRows({header_info,row_data}:RowInfo)
{
    return(
        <tr id='Mrow'>
            <th id='Mheader'>{header_info}</th>
            <td id="Mdata">
                <ul>
                    {row_data.map((item,idx)=>(
                        <li key={idx}>
                            <a href="/SampleForum">{item}</a>
                        </li>
                    ))}
                </ul>
            </td>
        </tr>
    );
}

export default MainMenuTableRows
