import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./EventsPage.scss";

import recentImg from "../../assets/icons/history.svg";
import favoriteImg from "../../assets/icons/heart.svg";
import InformationExplorerLine from "../../components/InformationExplorerLine/InformationExplorerLine";

export default function EventsPage() {
    return (
        <div className="events">
            <div className="events__buttons">
                <ButtonElementDark img={recentImg} name="Recent" />
                <ButtonElementDark img={favoriteImg} name="Favorites" />
            </div>
            <div className="events__information">
                <InformationExplorerLine />
                <InformationExplorerLine />
                <InformationExplorerLine />
                <InformationExplorerLine />
                <InformationExplorerLine />
            </div>
        </div>
    );
}
