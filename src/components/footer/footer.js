import { Link } from "react-router-dom";
import  "./footer.scss";

export default function Footer() {
    return (
        <footer>
      <p> &copy; Copyright 2023 </p>
      <Link to = "https://github.com/Makhosi1">GitHub</Link>
    </footer>
    )
}