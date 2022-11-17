import "./FriendsElement.scss";

// icons
import microImg from "../../assets/icons/microphone.svg"
import moreImg from "../../assets/icons/more-v.svg"

// images
import profileImg from "../../assets/images/melanie-perkins.jpg"

export default function FriendsElement() {
  return (
    <div className="friends-element">
        <div className="friends-element__user">
            <img className="friends-element__user-img" src={profileImg} alt="" />
            <div className="friends-element__user-info">
                <h5 className="friends-element__user-info-header">Melanie Perkins</h5>
                <p className="friends-element__user-info-username">@melanieperkins</p>
            </div>
        </div>
        <div className="friends-element__nav">
            <img className="friends-element__nav-indv" src={microImg} alt="" />
            <img className="friends-element__nav-indv" src={moreImg} alt="" />
        </div>
    </div>
  )
}
