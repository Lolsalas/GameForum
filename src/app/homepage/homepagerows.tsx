
interface titles
{
    header:string
    href:string
}


function HomepageRows({header,href}:titles)
{
    return(
        <tr id='MainPageRow'>
        <td>
            <a href={href}>{header}</a>
        </td>
        </tr>
    )
}

export default HomepageRows