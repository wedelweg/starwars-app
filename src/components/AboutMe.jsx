import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { characters } from "../utils/characters.js";

const CACHE_TIME = 24 * 60 * 60 * 1000; // 24 часа

const AboutMe = ({ hero }) => {
    const { heroId } = useParams();
    const currentHero = heroId || hero || "luke";

    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_URL = characters[currentHero]?.url;
    const CACHE_KEY = `aboutMeData_${currentHero}`;

    useEffect(() => {
        if (!API_URL) {
            setError("Hero not found");
            setLoading(false);
            return;
        }

        const cached = localStorage.getItem(CACHE_KEY);

        if (cached) {
            const parsed = JSON.parse(cached);
            const isExpired = Date.now() - parsed.timestamp > CACHE_TIME;

            if (!isExpired) {
                setPerson(parsed.data);
                setLoading(false);
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
                const personData = data.result?.properties || data; // вытаскиваем свойства из swapi.tech
                setPerson(personData);
                localStorage.setItem(
                    CACHE_KEY,
                    JSON.stringify({ data: personData, timestamp: Date.now() })
                );
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [API_URL, CACHE_KEY]);

    if (loading)
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    if (error)
        return (
            <div className="container mt-4">
                <div className="alert alert-danger text-center">Error: {error}</div>
            </div>
        );

    if (!person) return null;

    const heroData = characters[currentHero];

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div
                className="p-4 shadow-lg"
                style={{
                    maxWidth: "500px",
                    background: "rgba(0, 0, 0, 0.8)",
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

                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-dark text-white">
                        <strong>ID:</strong> {person.id}
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <strong>Height:</strong> {person.height} cm
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <strong>Mass:</strong> {person.mass} kg
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <strong>Birth Year:</strong> {person.birth_year}
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <strong>Gender:</strong> {person.gender}
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <strong>Hair Color:</strong> {person.hair_color}
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <strong>Eye Color:</strong> {person.eye_color}
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <strong>Skin Color:</strong> {person.skin_color}
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <strong>Homeworld ID:</strong> {person.homeworld}
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <strong>Created:</strong>{" "}
                        {person.created
                            ? new Date(person.created).toLocaleDateString()
                            : "N/A"}
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <strong>Edited:</strong>{" "}
                        {person.edited
                            ? new Date(person.edited).toLocaleDateString()
                            : "N/A"}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutMe;
