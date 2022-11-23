import "./ButtonElementDark.scss";

export default function ButtonElementDark({ img, name, onClick }) {
    return (
        <div className="button-dark" onClick={onClick}>
            <img className="button-dark__img" src={img} alt="" />
            <p className="button-dark__text">{name}</p>
        </div>
    );
}
