import "./ProfileImgFriends.scss";


export default function ProfileImgFriends({ img }) {
    return (
        <div className="friends-img">
            <img className="friends-img__indv" src={img} alt="" />
        </div>
    );
}
