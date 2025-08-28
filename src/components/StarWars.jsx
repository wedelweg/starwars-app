import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/constants.js";

const CACHE_KEY = "starwars_opening";
const CACHE_TIME = 1000 * 60 * 60 * 24; // 24 часа

const StarWars = () => {
    const [crawl, setCrawl] = useState("Loading...");

    useEffect(() => {
        const cached = localStorage.getItem(CACHE_KEY);

        if (cached) {
            const parsed = JSON.parse(cached);
            const isExpired = Date.now() - parsed.time > CACHE_TIME;

            if (!isExpired) {
                setCrawl(parsed.text);
                return;
            } else {
                localStorage.removeItem(CACHE_KEY);
            }
        }

        fetch(`${baseUrl}/v1/films`)
            .then((res) => res.json())
            .then((films) => {
                if (films.length > 0) {

                    const randomFilm = films[Math.floor(Math.random() * films.length)];
                    const text = randomFilm.opening_crawl;

                    setCrawl(text);

                    localStorage.setItem(
                        CACHE_KEY,
                        JSON.stringify({
                            text,
                            time: Date.now(),
                        })
                    );
                } else {
                    setCrawl("No films found.");
                }
            })
            .catch((err) => setCrawl("Error loading films: " + err.message));
    }, []);

    return (
        <div className="container mt-5">
            <h1>Star Wars</h1>
            <p className="farGalaxy">{crawl}</p>
        </div>
    );
};

export default StarWars;
