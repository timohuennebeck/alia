import "./ButtonElementDark.scss";

export default function ButtonElementDark({ img, name }) {
    return (
        <div className="button-dark">
            <img className="button-dark__img" src={img} alt="" />
            <p className="button-dark__text">{name}</p>
        </div>
    );
}
