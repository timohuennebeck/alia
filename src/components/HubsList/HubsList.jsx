import HubsElement from "../HubsElement/HubsElement";
import "./HubsList.scss";

export default function HubsList() {
    return (
        <div className="hubs">
            <h3>Favorite Hubs</h3>
            <div className="hubs__list">
                <HubsElement />
            </div>
        </div>
    );
}
