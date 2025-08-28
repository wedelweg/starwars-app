import React from "react";
import Navigation from "./Navigation.jsx";
import { characters } from "../utils/characters.js";

const Header = ({ hero }) => {
    const currentHero = characters[hero] || characters["luke"]; // если героя нет, дефолтно Luke

    return (
        <header className="clearfix mb-4">
            <h1 className="flex-grow-1 text-center text-warning m-0">{currentHero.name}</h1> {/* 👈 здесь меняется */}
            <Navigation />
        </header>
    );
};

export default Header;
