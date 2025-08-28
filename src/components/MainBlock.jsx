import React from "react";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import { Routes, Route } from "react-router-dom";
import { navItems } from "../utils/constants.jsx";

const MainBlock = () => {
    return (
        <Routes>
            <>
            {['/', `${navItems[0].route}`].map((p) => (
                <Route key={p} path={p} element={<Home />} />
            ))}

            <Route path={navItems[1].route} element={<AboutMe />} />
            <Route path={navItems[2].route} element={<StarWars />} />
            <Route path={navItems[3].route} element={<Contact />} />

            <Route path="*" element={<h1>ERROR!</h1>} />
            </>
        </Routes>
    );
};

export default MainBlock;
