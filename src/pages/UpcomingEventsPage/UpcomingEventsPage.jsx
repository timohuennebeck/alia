import "./UpcomingEventsPage.scss";

// images
import cogImg from "../../assets/icons/cog.svg";
import EventsElement from "../../components/EventsElement/EventsElement";

// components
import EventsPage from "../EventsPage/EventsPage";

// libraries
import ReactModal from "react-modal";
import { useEffect, useState } from "react";

// api calls
import { getEvents } from "../../utils/api";

export default function UpcomingEventsPage() {
    const [eventsData, setEventsData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        getEvents().then(({ data }) => {
            setEventsData(data);
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
            <div className="upcoming-events">
                <div className="upcoming-events__settings">
                    <h3 className="upcoming-events__settings-header">Upcoming Events</h3>
                    <img className="upcoming-events__settings-img" src={cogImg} alt="" />
                </div>
                <p className="upcoming-events__date">TODAY</p>
                <div className="upcoming-events__list">
                    {eventsData.map((item) => {
                        return <EventsElement data={item} />;
                    })}
                </div>
                <p className="upcoming-events__more" onClick={openModal}>
                    Explore Events
                </p>
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="upcoming-events__card-modal"
                overlayClassName="upcoming-events__card-modal-background"
            >
                <EventsPage closeModal={closeModal} />
            </ReactModal>
        </>
    );
}
