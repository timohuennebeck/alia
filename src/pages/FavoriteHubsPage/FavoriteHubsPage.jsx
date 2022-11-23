import "./FavoriteHubsPage.scss";

// components
import HubsElement from "../../components/HubsElement/HubsElement";

// api calls
import { getHubs } from "../../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FavoriteHubsPage() {
    const [hubsData, setHubsData] = useState([]);

    useEffect(() => {
        getHubs().then(({ data }) => {
            setHubsData(data.filter((hubs) => hubs.status === "Favorite"));
        });
    }, []);

    return (
        <div className="favorite-hubs">
            <h3>Favorite Hubs</h3>
            <div className="favorite-hubs__list">
                {hubsData.map((item) => {
                    return <HubsElement hubsData={item} key={item.id} />;
                })}
            </div>
            <Link to="/hubs" className="favorite-hubs__more">Explore Hubs</Link>
        </div>
    );
}
