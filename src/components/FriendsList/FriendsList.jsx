import FriendsElement from "../FriendsElement/FriendsElement";
import "./FriendsList.scss";

export default function FriendsList() {
    return (
        <div className="friends">
            <h3>Friends</h3>
            <div className="friends__list">
                <FriendsElement />
                <FriendsElement />
                <FriendsElement />
                <FriendsElement />
                <FriendsElement />
                <FriendsElement />
            </div>
        </div>
    );
}
