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

// libraries

// api calls
import { getUsers } from "../../utils/api";
import { getPosts } from "../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FriendsProfilePage() {
    const [usersData, setUsersData] = useState([]);
    const [postsData, setPostsData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getUsers().then(({ data }) => {
            setUsersData(data.filter((friend) => friend.id === Number(id))[0]);
        });
        getPosts().then(({ data }) => {
            setPostsData(data.filter((post) => post.users_id === Number(id)));
        });
    }, [id]);

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
                    <UserProfile usersData={usersData}/>
                    <div className="friends-profile__align-right-posts">
                        <div className="friends-profile__align-right-posts-content">
                            <h3 className="friends-profile__align-right-posts-content-header">
                                {usersData.first_name}'s Posts
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
                        {postsData.map((item) => {
                            return <CommentElement postsData={item} key={item.id}/>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
