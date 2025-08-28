import React from "react";
import { main } from "../utils/constants.jsx";

const Hero = () => {
    return (
        <section className="float-start w-25 me-3">
            <img
                className="img-fluid rounded"
                src={main}
                alt="Luke Skywalker"
                style={{ maxWidth: "220px" }}
            />
        </section>
    );
};

export default Hero;
