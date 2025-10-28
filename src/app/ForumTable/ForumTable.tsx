import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import ForumTableRows from "./ForumTableRows";

const info=
[
    {title:'PlaceholderTitle',author:'PlaceholderAuthor',replies:'100',views:'100',activity:'1 hour'},
    {title:'PlaceholderTitle',author:'PlaceholderAuthor',replies:'100',views:'100',activity:'1 hour'},
    {title:'PlaceholderTitle',author:'PlaceholderAuthor',replies:'100',views:'100',activity:'1 hour'},
    {title:'PlaceholderTitle',author:'PlaceholderAuthor',replies:'100',views:'100',activity:'1 hour'},
    {title:'PlaceholderTitle',author:'PlaceholderAuthor',replies:'100',views:'100',activity:'1 hour'}
]

function ForumTable()
{
    return(
        <div id='ForumTable'>
            <TopBar/>
            <SideBar/>
            <h1 id='ForumSectionTitle'>General Discussion</h1>
            <table id='SecondaryTable'>
                <thead>
                    <tr>
                        <th id='Topic'>Topic</th>
                        <th id='Author'>Author</th>
                        <th id='Views'>Views</th>
                        <th id='Replies'>Replies</th>
                        <th id='Activity'>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((row,index)=>(
                        <ForumTableRows  key={index} header={row.title} author={row.author} replies={row.replies} views={row.views} activity={row.activity}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ForumTable