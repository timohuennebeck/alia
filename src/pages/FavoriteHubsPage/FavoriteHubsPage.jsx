import "./FavoriteHubsPage.scss";

// components
import HubsElement from "../../components/HubsElement/HubsElement";
import HubsPage from "../HubsPage/HubsPage";

// libraries
import ReactModal from "react-modal";
import { useEffect, useState } from "react";

// api calls
import { getHubs } from "../../utils/api";

export default function FavoriteHubsPage() {
    const [hubsData, setHubsData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        getHubs().then(({ data }) => {
            setHubsData(data.filter((hubs) => hubs.status === "Favorite"));
        });
    }, []);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className="favorite-hubs">
                <h3>Favorite Hubs</h3>
                <div className="favorite-hubs__list">
                    {hubsData.map((item) => {
                        return <HubsElement hubsData={item} key={item.id} />;
                    })}
                </div>
                <p className="favorite-hubs__more" onClick={openModal}>
                    Explore Hubs
                </p>
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="favorite-hubs__card-modal"
                overlayClassName="favorite-hubs__card-modal-background"
            >
                <HubsPage closeModal={closeModal} />
            </ReactModal>
        </>
    );
}
