import r2d2 from "../images/friend1.jpg";
import c3po from "../images/friend2.jpg";
import wicket from "../images/friend3.jpg";
import chewbacca from "../images/friend4.jpg";
import han from "../images/friend5.jpg";
import leia from "../images/friend6.jpg";
import falcon from "../images/friend7.jpg";
import obiwan from "../images/friend8.jpg";
import yoda from "../images/friend9.jpg";
import luke from "../images/main.jpg";


export const friends = [
    r2d2,
    c3po,
    wicket,
    chewbacca,
    han,
    leia,
    falcon,
    obiwan,
    yoda,
];


export const heroes = [
    { name: "Luke Skywalker", image: luke },
    { name: "Leia Organa", image: leia },
    { name: "Han Solo", image: han },
    { name: "Darth Vader", image: null }, // фото нет
    { name: "Yoda", image: yoda },
    { name: "Obi-Wan Kenobi", image: obiwan },
    { name: "R2-D2", image: r2d2 },
    { name: "C-3PO", image: c3po },
    { name: "Chewbacca", image: chewbacca },
    { name: "Wicket", image: wicket },
    { name: "Millennium Falcon", image: falcon },
];

export const baseUrl = "https://sw-info-api.herokuapp.com";
export const period = 24 * 60 * 60 * 1000;

export const navItems = [
    { title: "Home", route: "" },
    { title: "About Me", route: "aboutMe" },
    { title: "Star Wars", route: "starWars" },
    { title: "Contact", route: "contact" },
];

export { luke as main };
