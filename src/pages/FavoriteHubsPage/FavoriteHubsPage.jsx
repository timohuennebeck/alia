import HubsElement from "../../components/HubsElement/HubsElement";
import "./FavoriteHubsPage.scss";

export default function FavoriteHubsPage() {
    return (
        <div className="favorite-hubs">
            <h3>Favorite Hubs</h3>
            <div className="favorite-hubs__list">
                <HubsElement />
                <HubsElement />
                <HubsElement />
                <HubsElement />
                <HubsElement />
            </div>
        </div>
    );
}