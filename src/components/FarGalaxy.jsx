import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/constants.jsx";

const FarGalaxy = () => {
    const [text, setText] = useState("Loading...");

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6) + 1;
        const timer = setTimeout(() => {
            fetch(`${baseUrl}/v1/films/${episode}`)
                .then((response) => response.json())
                .then((data) => setText(data.opening_crawl))
                .catch((error) => setText("Loading error: " + error.message));
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section>
            <p className="farGalaxy">{text}</p>
        </section>
    );
};

export default FarGalaxy;
