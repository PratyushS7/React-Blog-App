import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = false;
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook-f"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCentre">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">Home</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/">About</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/">Contact</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/write">Write</Link>
                </li>
                <li className="topListItem">
                    {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ?
                (
                <img
                    className="topImg" 
                    src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
                    alt=""
                />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">Register</Link>
                        </li>
                    </ul>
                )
            }
            
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
