import "./HeaderLinks.scss";
import React from "react";

// libraries
import { Link } from "react-router-dom";

// icons
import menuImg from "../../assets/icons/hamburger-menu.svg";

interface HeaderLinksProps {
    closeModal: () => void;
}

export default function MobileHeaderLinks({ closeModal }: HeaderLinksProps) {
    return (
        <div className="header-links" onClick={closeModal}>
            <img className="header-links__img" src={menuImg} alt="" />
            <div className="header-links__links">
                <Link className="header-links__links-indv" to="/">
                    Home
                </Link>
                <Link className="header-links__links-indv" to="/friends">
                    Friends
                </Link>
                <Link className="header-links__links-indv" to="/trending">
                    Trending Posts
                </Link>
                <Link className="header-links__links-indv" to="/hubs">
                    Favorite Hubs
                </Link>
                <Link className="header-links__links-indv" to="/meetings">
                    Upcoming Meetings
                </Link>
                <Link className="header-links__links-indv" to="/events">
                    Upcoming Events
                </Link>
            </div>
        </div>
    );
}
