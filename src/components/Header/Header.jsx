import "./Header.scss";

// libraries
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// icons
import menuImg from "../../assets/icons/hamburger-menu.svg";
import watchImg from "../../assets/icons/eye.svg";
import docxImg from "../../assets/icons/attach-document.svg";
import logoutImg from "../../assets/icons/lock-alt.svg";

// images
import profileImg from "../../assets/images/portrait.jpg";
import HeaderLinks from "../HeaderLinks/HeaderLinks";

import { getUsers } from "../../utils/api";

export default function MobileHeader() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [usersData, setUsersData] = useState([]);

    const { user, logout } = useAuth0();

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    useEffect(() => {
        getUsers().then(({ data }) => {
            setUsersData(data[0]);
        });
    }, []);

    if (!user) {
        return null;
    }

    return (
        <div className="header">
            <div className="header__menu">
                <img className="header__menu-svg" src={menuImg} alt="" onClick={openModal} />
            </div>
            <div className="header__nav">
                <Link to="/comments">
                    <img className="header__nav-watch" src={watchImg} alt="" />
                </Link>
                <Link to="/files">
                    <img className="header__nav-docx" src={docxImg} alt="" />
                </Link>
                <Link>
                    <img
                        onClick={() => logout({ returnTo: window.location.origin })}
                        className="header__nav-more"
                        src={logoutImg}
                        alt=""
                    />
                </Link>
            </div>
            <Link to={`/profile/${usersData.id}`} className="header__profile">
                <img className="header__profile-img" src={user.picture} alt="" />
                <h5 className="header__profile-name">{user.name}</h5>
            </Link>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="header__card-modal"
            >
                <HeaderLinks closeModal={closeModal} />
            </ReactModal>
        </div>
    );
}
