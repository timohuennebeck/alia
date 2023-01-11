import "./ProfileImgFriends.scss";
import React from "react";

interface ProfileImgFriendsProps {
    img: string;
}

export default function ProfileImgFriends({ img }: ProfileImgFriendsProps) {
    return (
        <div className="friends-img">
            <img className="friends-img__indv" src={img} alt="" />
        </div>
    );
}
