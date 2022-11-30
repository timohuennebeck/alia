import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";
import "./DropdownDark.scss";

import personImg from "../../assets/icons/user.svg";

export default function DropdownDark({ onChange }) {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        getUsers().then(({ data }) => {
            setUsersData(data);
        });
    }, []);

    return (
        <div className="dropdown-dark">
            <img className="dropdown-dark__img" src={personImg} alt="" />
            <select className="dropdown-dark__select" name="status" onChange={onChange}>
                <option className="dropdown-dark__select-option" value="" disabled selected>
                    Person
                </option>
                {usersData.map((item) => {
                    return (
                        <option
                            className="dropdown-dark__select-option"
                            value={item.id}
                            key={item.id}
                        >
                            {item.first_name} {item.last_name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
