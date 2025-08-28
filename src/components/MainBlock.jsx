import React from "react";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import { Routes, Route } from "react-router-dom";

const MainBlock = ({ hero, setHero }) => {
    return (
        <Routes>
            <Route path="/" element={<Home hero={hero} setHero={setHero} />} />
            <Route path="/:heroId" element={<Home hero={hero} setHero={setHero} />} />
            <Route path="/aboutMe/:heroId" element={<AboutMe hero={hero} />} />
            <Route path="/aboutMe" element={<AboutMe hero={hero} />} />
            <Route path="/starWars" element={<StarWars />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>ERROR!</h1>} />
        </Routes>
    );
};

export default MainBlock;
