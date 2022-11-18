import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./FilesPage.scss";

import recentImg from "../../assets/icons/history.svg";
import favoriteImg from "../../assets/icons/heart.svg";
import DetailsRow from "../../components/DetailsRow/DetailsRow";

export default function FilesPage() {
    return (
        <div className="files">
            <div className="files__buttons">
                <ButtonElementDark img={recentImg} name="Recent" />
                <ButtonElementDark img={favoriteImg} name="Favorites" />
            </div>
            <div className="files__information">
                <DetailsRow />
                <DetailsRow />
                <DetailsRow />
                <DetailsRow />
                <DetailsRow />
            </div>
        </div>
    );
}
