import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./HubsPage.scss";

// images
import recentImg from "../../assets/icons/history.svg";
import favoriteImg from "../../assets/icons/heart.svg";
import hideImg from "../../assets/icons/eye-slash.svg";

// components
import DetailsRow from "../../components/DetailsRow/DetailsRow";

// libraries

// api calls
import { getHubs } from "../../utils/api";
import { useEffect, useState } from "react";

export default function HubsPage({closeModal}) {
    const [hubsData, setHubsData] = useState([]);

    useEffect(() => {
        getHubs().then(({ data }) => {
            setHubsData(data);
        });
    }, []);

    return (
        <div className="hubs">
            <div className="hubs__buttons">
            <div className="hubs__buttons-hide">
                    <ButtonElementDark name="Hide" img={hideImg} onClick={closeModal} />
                </div>
                <ButtonElementDark img={recentImg} name="Recent" />
                <ButtonElementDark img={favoriteImg} name="Favorites" />
            </div>
            <div className="hubs__information">
                {hubsData.map((item) => {
                    return <DetailsRow data={item} key={item.id} />;
                })}
            </div>
        </div>
    );
}
