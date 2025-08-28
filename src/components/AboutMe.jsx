import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { characters } from "../utils/characters.js";

const CACHE_TIME = 24 * 60 * 60 * 1000;

const AboutMe = ({ hero }) => {
    const { heroId } = useParams(); // берем из URL если есть
    const currentHero = heroId || hero || "luke"; // приоритет: из URL → из state → Luke

    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null);

    const API_URL = characters[currentHero]?.url;
    const CACHE_KEY = `aboutMeData_${currentHero}`;

    useEffect(() => {
        if (!API_URL) return;

        const cached = localStorage.getItem(CACHE_KEY);

        if (cached) {
            const parsed = JSON.parse(cached);
            const isExpired = Date.now() - parsed.timestamp > CACHE_TIME;

            if (!isExpired) {
                setPerson(parsed.data);
                return;
            } else {
                localStorage.removeItem(CACHE_KEY);
            }
        }

        fetch(API_URL)
            .then((response) => {
                if (!response.ok) throw new Error("HTTP error " + response.status);
                return response.json();
            })
            .then((data) => {
                setPerson(data);
                localStorage.setItem(
                    CACHE_KEY,
                    JSON.stringify({ data, timestamp: Date.now() })
                );
            })
            .catch((err) => setError(err.message));
    }, [API_URL, CACHE_KEY]);

    if (error) return <p>Error: {error}</p>;
    if (!person) return <p>Loading...</p>;

    const heroData = characters[currentHero];

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div
                className="p-4 shadow-lg"
                style={{
                    maxWidth: "500px",
                    background: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                    borderRadius: "12px",
                }}
            >
                {heroData && heroData.img && (
                    <div className="text-center mb-3">
                        <img
                            src={heroData.img}
                            alt={heroData.name}
                            className="img-fluid rounded"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                        <h2 className="text-center mt-2">{heroData.name}</h2>
                    </div>
                )}

                <p><span style={{ textDecoration: "underline" }}>ID:</span> {person.id}</p>
                <p><span style={{ textDecoration: "underline" }}>Height:</span> {person.height} cm</p>
                <p><span style={{ textDecoration: "underline" }}>Mass:</span> {person.mass} kg</p>
                <p><span style={{ textDecoration: "underline" }}>Birth Year:</span> {person.birth_year}</p>
                <p><span style={{ textDecoration: "underline" }}>Gender:</span> {person.gender}</p>
                <p><span style={{ textDecoration: "underline" }}>Hair Color:</span> {person.hair_color}</p>
                <p><span style={{ textDecoration: "underline" }}>Eye Color:</span> {person.eye_color}</p>
                <p><span style={{ textDecoration: "underline" }}>Skin Color:</span> {person.skin_color}</p>
                <p><span style={{ textDecoration: "underline" }}>Homeworld ID:</span> {person.homeworld}</p>
                <p><span style={{ textDecoration: "underline" }}>Created:</span> {new Date(person.created).toLocaleDateString()}</p>
                <p><span style={{ textDecoration: "underline" }}>Edited:</span> {new Date(person.edited).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default AboutMe;
