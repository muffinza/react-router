import { Link } from "react-router-dom"
import "./Navbar.css"
export default function Navbar(){
    return(
        <nav>
           <Link className="logo" to="/"><h3>sugar glider</h3></Link>
            <Link to="/">หน้าเเรก</Link>
            <Link to="/about">เกี่ยวกับ</Link>
            <Link to="/blog">บล็อก</Link>
        </nav>
    )
}