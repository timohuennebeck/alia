import "./MobileHeader.scss";

// icons
import menuImg from "../../assets/icons/hamburger-menu.svg";
import watchImg from "../../assets/icons/eye.svg";
import docxImg from "../../assets/icons/attach-document.svg";
import moreImg from "../../assets/icons/more-h.svg";

// images
import profileImg from "../../assets/images/melanie-perkins.jpg";

export default function MobileHeader() {
    return (
        <div className="mobile">
            <div className="mobile__menu">
                <img className="mobile__menu-svg" src={menuImg} alt="" />
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
        </div>
    );
}
