import React, { useState } from "react";
import Header from "./components/Header.jsx";
import MainBlock from "./components/MainBlock.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
    const [hero, setHero] = useState("luke");

    return (
        <>
            <Header hero={hero}  />
            <MainBlock hero={hero} setHero={setHero} />
            <Footer />
        </>
    );
}

export default App;
