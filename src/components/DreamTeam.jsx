import React from "react";
import { characters } from "../utils/characters.js";

const DreamTeam = ({ onSelectHero, activeHero }) => {
    return (
        <section className="float-end w-50">
            <h2 className="mb-3">Dream Team</h2>
            <div className="d-flex flex-wrap">
                {Object.keys(characters)
                    .filter((key) => key !== activeHero) // 👈 исключаем выбранного героя
                    .map((key) => (
                        <img
                            key={key}
                            src={characters[key].img}
                            alt={characters[key].name}
                            title={characters[key].name}
                            className="img-thumbnail m-2"
                            style={{ width: "120px", cursor: "pointer" }}
                            onClick={() => onSelectHero(key)}
                        />
                    ))}
            </div>
        </section>
    );
};

export default DreamTeam;
