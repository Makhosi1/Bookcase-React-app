import  { Link } from "react-router-dom";
import "./Header.scss";

export default function Header(){
    return(
        <div className="header">
            <h1>My Bookcase</h1>
            <Link to= "/">Home</Link>&emsp;
            <Link to= "/contact">Contact</Link>&emsp;
            <Link to= "/bookcase">Bookcase</Link>
        </div>
    )
}

// &nbsp will give space which is equivalent to 1 space and &emsp adds more space