import FriendsElement from "../../components/FriendsElement/FriendsElement";
import "./FriendsPage.scss";
import { Link } from "react-router-dom";

export default function FriendsPage() {
    return (
        <div className="friends">
            <h3>Friends</h3>
            <div className="friends__list">
                <FriendsElement />
                <FriendsElement />
                <FriendsElement />
            </div>
        </div>
    );
}
