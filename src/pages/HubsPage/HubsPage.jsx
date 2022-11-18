import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./HubsPage.scss";

import recentImg from "../../assets/icons/history.svg";
import favoriteImg from "../../assets/icons/heart.svg";
import InformationExplorerLine from "../../components/DetailsRow/DetailsRow";

export default function HubsPage() {
    return (
        <div className="hubs">
            <div className="hubs__buttons">
                <ButtonElementDark img={recentImg} name="Recent" />
                <ButtonElementDark img={favoriteImg} name="Favorites" />
            </div>
            <div className="hubs__information">
                <InformationExplorerLine />
                <InformationExplorerLine />
                <InformationExplorerLine />
                <InformationExplorerLine />
                <InformationExplorerLine />
            </div>
        </div>
    );
}
