interface titles
{
    header:string
    author:string
    replies:string
    views:string
    activity:string
}


function ForumTableRows({header,author,replies,views,activity}:titles)
{
    return(
        <tr id='ForumTableRow'>
        <td>
            <a>{header}</a>
        </td>
        <td>
            <a>{author}</a>
        </td>
        <td>
            <a>{replies}</a>
        </td>
        <td>
            <a>{views}</a>
        </td>
        <td>
            <a>{activity}</a>
        </td>
        </tr>
    )
}

export default ForumTableRows