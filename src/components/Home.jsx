import React from "react";
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";

const Home = () => {
    return (
        <main className="clearfix container mt-4">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    );
};

export default Home;
