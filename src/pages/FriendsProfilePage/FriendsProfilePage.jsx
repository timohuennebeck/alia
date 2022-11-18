import NewComment from "../../components/NewComment/NewComment";
import "./FriendsProfilePage.scss";

import profileImg from "../../assets/images/melanie-perkins.jpg";
import ProfileImgFriends from "../../components/ProfileImgFriends/ProfileImgFriends";
import calendarImg from "../../assets/icons//calendar-month.svg";
import moreImg from "../../assets/icons/more-h.svg";
import UserProfile from "../../components/UserProfile/UserProfile";
import bellImg from "../../assets/icons/bell-slash.svg";
import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import userImg from "../../assets/icons/user-plus.svg";
import messageImg from "../../assets/icons/chat.svg";
import notificationImg from "../../assets/icons/bell.svg";
import moreHorizontalImg from "../../assets/icons/more-v.svg";

export default function FriendsProfilePage() {
    return (
        <div className="friends-profile">
            <div className="friends-profile__nav">
                <ButtonElementDark img={userImg} name="Add Friend" />
                <ButtonElementDark img={messageImg} name="Message" />
                <div className="friends-profile__nav-more">
                    <ButtonElementDark img={notificationImg} name="Mute" />
                    <ButtonElementDark img={moreHorizontalImg} name="More" />
                </div>
            </div>
            <div className="friends-profile__friends">
                <ProfileImgFriends img={profileImg} />
                <ProfileImgFriends img={profileImg} />
            </div>
            <UserProfile />
            <div className="friends-profile__posts">
                <div className="friends-profile__posts-content">
                    <h3 className="friends-profile__posts-content-header">Melanie's Posts</h3>
                    <p className="friends-profile__posts-content-amount">25 Posts</p>
                </div>
                <div className="friends-profile__posts-images">
                    <img className="friends-profile__posts-images-indv" src={calendarImg} alt="" />
                    <img className="friends-profile__posts-images-indv" src={bellImg} alt="" />
                    <img className="friends-profile__posts-images-indv" src={moreImg} alt="" />
                </div>
            </div>

            <div className="friends-profile__comments">
                <NewComment />
            </div>
        </div>
    );
}
