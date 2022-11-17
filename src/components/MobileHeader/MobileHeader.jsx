import "./MobileHeader.scss";

// images
import menuImg from "../../assets/images/hamburger-menu.svg"
import watchImg from "../../assets/images/eye.svg";
import docxImg from "../../assets/images/attach-document.svg";
import moreImg from "../../assets/images/more-h.svg"

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
        </div>
    );
}
