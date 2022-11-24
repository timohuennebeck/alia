import "./FriendsPage.scss";

// components
import FriendsElement from "../../components/FriendsElement/FriendsElement";

// libraries
import { useEffect, useState } from "react";

// api calls
import { getUsers } from "../../utils/api";

export default function FriendsPage() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        getUsers().then(({ data }) => {
            setUsersData(data);
        });
    }, []);

    if (!usersData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="friends">
            <h3>Friends</h3>
            <div className="friends__list">
                {usersData.map((item) => {
                    return <FriendsElement usersData={item} key={item.id} />;
                })}
            </div>
        </div>
    );
}
