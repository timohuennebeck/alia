import "./ButtonElement.scss";

export default function ButtonElement({ img, name, onClick }) {
    return (
        <div className="button" onClick={onClick}>
            <img className="button__img" src={img} alt="" />
            <p className="button__text">{name}</p>
        </div>
    );
}
