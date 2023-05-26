import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="nav">
            <Link to='/home'><h1>Online Kino Arena</h1></Link>
            <ul>
                <li><Link className="links" to="/home">Home</Link></li>
                <li><Link className="links" to="/about">About</Link></li>
                <li><Link className="links" to="/reviews">Reviews</Link></li>
            </ul>
        </nav>
    )
}



export default Navigation;