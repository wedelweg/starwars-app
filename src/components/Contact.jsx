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

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const response = await fetch(`${baseUrl}/v1/planets/`);
                if (!response.ok) {
                    throw new Error("Failed to load planets");
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
        // вместо console.log — открываем модалку
        setIsModalOpen(true);
    };

    return (
        <div className="container mt-5">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Your name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="planet" className="form-label">
                        Planet
                    </label>
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
                        >
                            <option value="">Select a planet...</option>
                            {planets.map((p, index) => (
                                <option key={index} value={p.name}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message
                    </label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Enter your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-success">
                    Send
                </button>
            </form>

            {/* Модалка с введёнными данными */}
            <ModalWindow isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <h5>Submitted data:</h5>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Planet:</strong> {planet}</p>
                <p><strong>Message:</strong> {message}</p>
            </ModalWindow>
        </div>
    );
};

export default Contact;
