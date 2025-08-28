import React, { useState } from "react";
import ModalWindow from "./ModalWindow";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer className="text-center mt-5">
            <p>© 2025 Star Wars App</p>
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                Email me
            </button>

            <ModalWindow isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <p>
                    You can email me at:{" "}
                    <a href="mailto:luke@starwars.com">luke@starwars.com</a>
                </p>
            </ModalWindow>
        </footer>
    );
};

export default Footer;
