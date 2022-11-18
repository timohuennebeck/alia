import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./FilesPage.scss";

import recentImg from "../../assets/icons/history.svg";
import favoriteImg from "../../assets/icons/heart.svg";
import InformationLine from "../../components/InformationLine/InformationLine";

export default function FilesPage() {
    return (
        <div className="files">
            <div className="files__buttons">
                <ButtonElementDark img={recentImg} name="Recent" />
                <ButtonElementDark img={favoriteImg} name="Favorites" />
            </div>
            <div className="files__information">
                <InformationLine />
                <InformationLine />
                <InformationLine />
                <InformationLine />
                <InformationLine />
            </div>
        </div>
    );
}
