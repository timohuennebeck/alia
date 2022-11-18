import FriendsElement from "../../components/FriendsElement/FriendsElement";
import "./FriendsPage.scss";

export default function FriendsPage() {
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
