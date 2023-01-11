import "./FriendsElement.scss";
import React from "react";

// icons
import microImg from "../../assets/icons/microphone.svg";
import moreImg from "../../assets/icons/more-v.svg";

// libraries
import { Link } from "react-router-dom";

interface FriendsElementProps {
    usersData: {
        id: number;
        image_url: string;
        first_name: string;
        last_name: string;
        username: string;
    };
}

export default function FriendsElement({ usersData }: FriendsElementProps) {
    return (
        <Link to={`/friends-profile/${usersData.id}`} className="friends-element">
            <div className="friends-element__user">
                <img className="friends-element__user-img" src={usersData.image_url} alt="" />
                <div className="friends-element__user-info">
                    <h5 className="friends-element__user-info-header">
                        {usersData.first_name} {usersData.last_name}
                    </h5>
                    <p className="friends-element__user-info-username">{usersData.username}</p>
                </div>
            </div>
            <div className="friends-element__nav">
                <img className="friends-element__nav-indv" src={microImg} alt="" />
                <img className="friends-element__nav-indv" src={moreImg} alt="" />
            </div>
        </Link>
    );
}
