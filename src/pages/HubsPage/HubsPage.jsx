import HubsElement from "../../components/HubsElement/HubsElement";
import "./HubsPage.scss";

export default function HubsPage() {
    return (
        <div className="hubs">
            <h3>Favorite Hubs</h3>
            <div className="hubs__list">
                <HubsElement />
            </div>
        </div>
    );
}
