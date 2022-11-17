import "./MobileHeader.scss";

// libraries
import ReactModal from "react-modal";
import { useState } from "react";

// icons
import menuImg from "../../assets/icons/hamburger-menu.svg";
import watchImg from "../../assets/icons/eye.svg";
import docxImg from "../../assets/icons/attach-document.svg";
import moreImg from "../../assets/icons/more-h.svg";

// images
import profileImg from "../../assets/images/melanie-perkins.jpg";
import MobileHeaderLinks from "../MobileHeaderLinks/MobileHeaderLinks";

export default function MobileHeader() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className="mobile">
            <div className="mobile__menu">
                <img className="mobile__menu-svg" src={menuImg} alt="" onClick={openModal} />
            </div>
            <div className="mobile__nav">
                <img className="mobile__nav-watch" src={watchImg} alt="" />
                <img className="mobile__nav-docx" src={docxImg} alt="" />
                <img className="mobile__nav-more" src={moreImg} alt="" />
            </div>
            <div className="mobile__profile">
                <img className="mobile__profile-img" src={profileImg} alt="" />
                <h5 className="mobile__profile-name">Melanie Perkins</h5>
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="mobile__card-modal"
            >
                <MobileHeaderLinks closeModal={closeModal}/>
            </ReactModal>
        </div>
    );
}
