import { Link } from "react-router-dom";
import "./topbar.css"
import React, { useContext } from 'react';
import { Context } from "../../context/Context";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5001/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
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
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ?
                        (
                            <Link to="/settings">
                                <img
                                    className="topImg"
                                    src={PF + user.profilePic}
                                    alt=""
                                />
                            </Link>
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
