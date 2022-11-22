import CommentElement from "../../components/CommentElement/CommentElement";
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

export default function FriendsProfilePage() {
    return (
        <div className="friends-profile">
            <div className="friends-profile__nav">
                <div className="friends-profile__nav-desktop">
                    <ButtonElementDark img={calendarImg} name="Meeting" />
                </div>
                <div className="friends-profile__nav-mobile">
                    <ButtonElementDark img={userImg} name="Add Friend" />
                </div>
                <div className="friends-profile__nav-mobile">
                    <ButtonElementDark img={messageImg} name="Message" />
                </div>
                <div className="friends-profile__nav-desktop">
                    <ButtonElementDark img={calendarImg} name="Huddle" />
                </div>
                <div className="friends-profile__nav-desktop">
                    <ButtonElementDark img={bellImg} name="Notifications" />
                </div>
            </div>
            <div className="friends-profile__align">
                <div className="friends-profile__align-friends">
                    <ProfileImgFriends img={profileImg} />
                    <ProfileImgFriends img={profileImg} />
                </div>
                <div className="friends-profile__align-right">
                    <UserProfile />
                    <div className="friends-profile__align-right-posts">
                        <div className="friends-profile__align-right-posts-content">
                            <h3 className="friends-profile__align-right-posts-content-header">
                                Melanie's Posts
                            </h3>
                            <p className="friends-profile__align-right-posts-content-amount">
                                25 Posts
                            </p>
                        </div>
                        <div className="friends-profile__align-right-posts-images">
                            <img
                                className="friends-profile__align-right-posts-images-indv"
                                src={calendarImg}
                                alt=""
                            />
                            <img
                                className="friends-profile__align-right-posts-images-indv"
                                src={bellImg}
                                alt=""
                            />
                            <img
                                className="friends-profile__align-right-posts-images-indv"
                                src={moreImg}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="friends-profile__align-right-comments">
                        <CommentElement />
                    </div>
                </div>
            </div>
        </div>
    );
}
