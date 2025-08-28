import React from "react";
import { characters } from "../utils/characters.js";

const Hero = ({ heroId }) => {
    const hero = characters[heroId];

    if (!hero) return <h2 className="text-danger">Hero not found!</h2>;

    return (
        <section className="float-start w-25 me-3 text-center">
            <img
                className="img-fluid rounded mb-2"
                src={hero.img}
                alt={hero.name}
                style={{ maxWidth: "220px" }}
            />
        </section>
    );
};

export default Hero;
