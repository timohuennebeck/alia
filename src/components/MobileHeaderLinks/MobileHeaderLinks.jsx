import "./MobileHeaderLinks.scss";

// libraries
import { Link } from "react-router-dom";

// icons
import menuImg from "../../assets/icons/hamburger-menu.svg";

export default function MobileHeaderLinks({ closeModal }) {
    return (
        <div className="mobile-header" onClick={closeModal}>
            <img className="mobile-header__img" src={menuImg} alt="" />
            <div className="mobile-header__links">
                <Link className="mobile-header__links-indv" to="/">
                    Home
                </Link>
                <Link className="mobile-header__links-indv" to="/friends">
                    Friends
                </Link>
                <Link className="mobile-header__links-indv" to="/trending">
                    Trending Posts
                </Link>
                <Link className="mobile-header__links-indv" to="/hubs">
                    Favorite Hubs
                </Link>
                <Link className="mobile-header__links-indv" to="/meetings">
                    Upcoming Meetings
                </Link>
                <Link className="mobile-header__links-indv" to="/events">
                    Upcoming Events
                </Link>
                <Link className="mobile-header__links-indv" to="/comments">
                    Saved Comments
                </Link>
            </div>
        </div>
    );
}
