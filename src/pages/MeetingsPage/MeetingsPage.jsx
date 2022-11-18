import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./MeetingsPage.scss";

import recentImg from "../../assets/icons/history.svg";
import favoriteImg from "../../assets/icons/heart.svg";
import InformationExplorerLine from "../../components/InformationExplorerLine/InformationExplorerLine";

export default function MeetingsPage() {
    return (
        <div className="meetings">
            <div className="meetings__buttons">
                <ButtonElementDark img={recentImg} name="Recent" />
                <ButtonElementDark img={favoriteImg} name="Favorites" />
            </div>
            <div className="meetings__information">
                <InformationExplorerLine />
                <InformationExplorerLine />
                <InformationExplorerLine />
                <InformationExplorerLine />
                <InformationExplorerLine />
            </div>
        </div>
    );
}
