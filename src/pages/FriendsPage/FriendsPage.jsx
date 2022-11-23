import FriendsElement from "../../components/FriendsElement/FriendsElement";
import "./FriendsPage.scss";

// libraries
import { Link } from "react-router-dom";

// api calls
import { getUsers } from "../../utils/api";
import { useEffect, useState } from "react";

export default function FriendsPage() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        getUsers().then(({ data }) => {
            setUsersData(data);
        });
    }, []);

    return (
        <div className="friends">
            <h3>Friends</h3>
            <div className="friends__list">
                {usersData.map((item) => {
                    return <FriendsElement data={item} />;
                })}
            </div>
        </div>
    );
}
