import "./Header.scss";

// libraries
import ReactModal from "react-modal";
import { useState } from "react";
import { Link } from "react-router-dom";

// icons
import menuImg from "../../assets/icons/hamburger-menu.svg";
import watchImg from "../../assets/icons/eye.svg";
import docxImg from "../../assets/icons/attach-document.svg";
import moreImg from "../../assets/icons/more-h.svg";

// images
import profileImg from "../../assets/images/melanie-perkins.jpg";
import HeaderLinks from "../HeaderLinks/HeaderLinks";

export default function MobileHeader() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
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
                    <img className="header__nav-more" src={moreImg} alt="" />
                </Link>
            </div>
            <Link to="/profile" className="header__profile">
                <img className="header__profile-img" src={profileImg} alt="" />
                <h5 className="header__profile-name">Melanie Perkins</h5>
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
