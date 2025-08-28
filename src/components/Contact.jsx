import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/constants";
import ModalWindow from "./ModalWindow";

const Contact = () => {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [name, setName] = useState("");
    const [planet, setPlanet] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const response = await fetch(`${baseUrl}/v1/planets/`);
                if (!response.ok) {
                    setError("Failed to load data");
                    return;
                }
                const data = await response.json();
                setPlanets(data.map((p) => ({ name: p.name })));
            } catch (err) {
                console.error("Failed to fetch planets:", err);
                setError("Could not load planets");
            } finally {
                setLoading(false);
            }
        };

        fetchPlanets();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true); // открываем модалку
    };

    const closeModal = () => {
        setShowModal(false);
        setName("");
        setPlanet("");
        setMessage("");
    };

    return (
        <div className="container mt-5">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name..."
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="planet" className="form-label">Planet</label>
                    {loading ? (
                        <select className="form-select" disabled>
                            <option>Loading...</option>
                        </select>
                    ) : error ? (
                        <select className="form-select" disabled>
                            <option>{error}</option>
                        </select>
                    ) : (
                        <select
                            className="form-select"
                            id="planet"
                            value={planet}
                            onChange={(e) => setPlanet(e.target.value)}
                            required
                        >
                            <option value="">Select a planet...</option>
                            {planets.map((planet, index) => (
                                <option key={index} value={planet.name}>
                                    {planet.name}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message here..."
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-success">Send</button>
            </form>

            <ModalWindow
                show={showModal}
                onClose={closeModal}
                name={name}
                planet={planet}
                message={message}
            />
        </div>
    );
};

export default Contact;
