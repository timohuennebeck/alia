import "./ButtonElement.scss";

export default function ButtonElement({ img, name }) {
    return (
        <div className="button">
            <img className="button__img" src={img} alt="" />
            <p className="button__text">{name}</p>
        </div>
    );
}
