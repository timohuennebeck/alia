import "./FriendsElement.scss";

// icons
import microImg from "../../assets/icons/microphone.svg";
import moreImg from "../../assets/icons/more-v.svg";

// images
import profileImg from "../../assets/images/melanie-perkins.jpg";

// libraries
import { Link } from "react-router-dom";

export default function FriendsElement({ data }) {
    return (
        <Link to={`/friends-profile/${data.id}`} className="friends-element">
            <div className="friends-element__user">
                <img className="friends-element__user-img" src={data.image_url} alt="" />
                <div className="friends-element__user-info">
                    <h5 className="friends-element__user-info-header">
                        {data.first_name} {data.last_name}
                    </h5>
                    <p className="friends-element__user-info-username">{data.username}</p>
                </div>
            </div>
            <div className="friends-element__nav">
                <img className="friends-element__nav-indv" src={microImg} alt="" />
                <img className="friends-element__nav-indv" src={moreImg} alt="" />
            </div>
        </Link>
    );
}
