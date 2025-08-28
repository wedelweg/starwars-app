import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";

const Home = ({ hero, setHero }) => {
    const { heroId } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        if (heroId) {
            setHero(heroId.toLowerCase());
        }
    }, [heroId, setHero]);

    const handleSelectHero = (id) => {
        setHero(id);
        navigate(`/${id}`);
    };

    return (
        <main className="clearfix container mt-4">
            <Hero heroId={hero} />
            <DreamTeam onSelectHero={handleSelectHero} activeHero={hero} />
            <FarGalaxy />
        </main>
    );
};

export default Home;
