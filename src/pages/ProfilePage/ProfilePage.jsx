import CommentElement from "../../components/CommentElement/CommentElement";
import "./ProfilePage.scss";

import profileImg from "../../assets/images/melanie-perkins.jpg";
import ProfileImgFriends from "../../components/ProfileImgFriends/ProfileImgFriends";
import calendarImg from "../../assets/icons//calendar-month.svg";
import moreImg from "../../assets/icons/more-h.svg";
import UserProfile from "../../components/UserProfile/UserProfile";
import { useEffect, useState } from "react";

import { getPosts, getUsers } from "../../utils/api";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
    const [usersData, setUsersData] = useState([]);
    const [postsData, setPostsData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getUsers().then(({ data }) => {
            setUsersData(data[0]);
        });
        getPosts().then(({ data }) => {
            setPostsData(data.filter((item) => item.users_id === Number(id)));
        });
    }, []);

    return (
        <div className="personal-profile">
            <div className="personal-profile__friends">
                <ProfileImgFriends img={profileImg} />
                <ProfileImgFriends img={profileImg} />
            </div>
            <div className="personal-profile__ctn">
                <UserProfile data={usersData} />
                <div className="personal-profile__ctn-posts">
                    <div className="personal-profile__ctn-posts-content">
                        <h3 className="personal-profile__ctn-posts-content-header">Your Posts</h3>
                        <p className="personal-profile__ctn-posts-content-amount">25 Posts</p>
                    </div>
                    <div className="personal-profile__ctn-posts-images">
                        <img
                            className="personal-profile__ctn-posts-images-indv"
                            src={calendarImg}
                            alt=""
                        />
                        <img
                            className="personal-profile__ctn-posts-images-indv"
                            src={moreImg}
                            alt=""
                        />
                    </div>
                </div>
                <div className="personal-profile__ctn-comments">
                    {postsData.map((item) => {
                        return <CommentElement postsData={item} key={item.id}/>;
                    })}
                </div>
            </div>
        </div>
    );
}
