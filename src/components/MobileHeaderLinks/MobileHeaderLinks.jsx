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
                    Profile
                </Link>
                <Link className="mobile-header__links-indv" to="/">
                    Favorite Hubs
                </Link>
                <Link className="mobile-header__links-indv" to="/">
                    Upcoming Meetings
                </Link>
                <Link className="mobile-header__links-indv" to="/">
                    Trending For You
                </Link>
            </div>
        </div>
    );
}
