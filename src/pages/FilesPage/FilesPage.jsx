import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./FilesPage.scss";

import recentImg from "../../assets/icons/history.svg";
import favoriteImg from "../../assets/icons/heart.svg";
import DetailsRow from "../../components/DetailsRow/DetailsRow";

// libraries
import { useEffect, useState } from "react";

// api calls
import { getFiles } from "../../utils/api";

export default function FilesPage() {
    const [filesData, setFilesData] = useState([]);

    useEffect(() => {
        getFiles().then(({ data }) => {
            setFilesData(data);
        });
    }, []);

    return (
        <div className="files">
            <div className="files__buttons">
                <ButtonElementDark img={recentImg} name="Recent" />
                <ButtonElementDark img={favoriteImg} name="Favorites" />
            </div>
            <div className="files__information">
                {filesData.map((item) => {
                    return <DetailsRow data={item} key={item.id}/>;
                })}
            </div>
        </div>
    );
}
