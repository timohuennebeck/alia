import "./UpcomingMeetingsPage.scss";

// images
import cogImg from "../../assets/icons/cog.svg";
import MeetingsElement from "../../components/MeetingsElement/MeetingsElement";

// libraries
import ReactModal from "react-modal";
import { useEffect, useState } from "react";


// api calls
import { getMeetings } from "../../utils/api";
import MeetingsPage from "../MeetingsPage/MeetingsPage";

export default function UpcomingMeetingsPage() {
    const [meetingsData, setMeetingsData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        getMeetings().then(({ data }) => {
            setMeetingsData(data);
        });
    }, []);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    if (!meetingsData) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="upcoming-meetings">
                <div className="upcoming-meetings__settings">
                    <h3 className="upcoming-meetings__settings-header">Upcoming Meetings</h3>
                    <img className="upcoming-meetings__settings-img" src={cogImg} alt="" />
                </div>
                <p className="upcoming-meetings__date">TODAY</p>
                <div className="upcoming-meetings__list">
                    {meetingsData.map((item) => {
                        return <MeetingsElement data={item} key={item.id} />;
                    })}
                </div>
                <p className="upcoming-meetings__more" onClick={openModal}>Explore Meetings</p>
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="upcoming-meetings__card-modal"
                overlayClassName="upcoming-meetings__card-modal-background"
            >
                <MeetingsPage closeModal={closeModal} />
            </ReactModal>
        </>
    );
}
