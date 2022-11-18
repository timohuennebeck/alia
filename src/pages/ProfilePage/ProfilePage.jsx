import NewComment from "../../components/NewComment/NewComment";
import "./ProfilePage.scss";

import profileImg from "../../assets/images/melanie-perkins.jpg";
import ProfileImgFriends from "../../components/ProfileImgFriends/ProfileImgFriends";
import calendarImg from "../../assets/icons//calendar-month.svg";
import moreImg from "../../assets/icons/more-h.svg";
import UserProfile from "../../components/UserProfile/UserProfile";

export default function ProfilePage() {
    return (
        <div className="personal-profile">
            <div className="personal-profile__friends">
                <ProfileImgFriends img={profileImg} />
                <ProfileImgFriends img={profileImg} />
            </div>
            <UserProfile />
            <div className="personal-profile__posts">
                <div className="personal-profile__posts-content">
                    <h3 className="personal-profile__posts-content-header">Your Posts</h3>
                    <p className="personal-profile__posts-content-amount">25 Posts</p>
                </div>
                <div className="personal-profile__posts-images">
                    <img className="personal-profile__posts-images-indv" src={calendarImg} alt="" />
                    <img className="personal-profile__posts-images-indv" src={moreImg} alt="" />
                </div>
            </div>

            <div className="personal-profile__comments">
                <NewComment />
            </div>
        </div>
    );
}