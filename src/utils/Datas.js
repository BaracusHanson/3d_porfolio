import plats from "../assets/images/lespetitsplats.png";
import food from "../assets/images/homyfood.png";
import fisheye from "../assets/images/fisheye.png";
import javascript from "../assets/technos/javascript.png";
import html from "../assets/technos/html.png";
import css from "../assets/technos/css.png";
import react from "../assets/technos/react.png";
import tailwind from "../assets/technos/tailwind.png";
import redux from "../assets/technos/redux.jpg";
import nodejs from "../assets/technos/nodejs-express.png";
import sass from "../assets/technos/sass.png";
const projects = [
  {
    id: 1,
    name: "Les Petits Plats",
    description: "Application de recherche de recettes",
    gitUrl: "https://github.com/BaracusHanson/LesPetitsPlats",
    liveUrl: "https://baracushanson.github.io/LesPetitsPlats/",
    imageUrl: plats,
  },
  {
    id: 2,
    name: "Agent bank",
    description: "Application de gestion de compte bancaire",
    technos:[react, redux, tailwind, nodejs],
    gitUrl: "https://github.com/BaracusHanson/argentBank",
    liveUrl: "https://baracushanson.github.io/LesPetitsPlats/",
    imageUrl: plats,
  },
  {
    id: 3,
    name: "Kasa",
    description: "Application de location de logement",
    technos:[html, sass],
    gitUrl: "https://github.com/BaracusHanson/kasa",
    liveUrl: "https://baracushanson.github.io/LesPetitsPlats/",
    imageUrl: plats,
  },
  {
    id: 4,
    name: "SportSee",
    description: "Application de suivi d'activité physique",
    technos:[html, css],
    gitUrl: "https://github.com/BaracusHanson/SportSee",
    liveUrl: "https://baracushanson.github.io/LesPetitsPlats/",
    imageUrl: plats,
  },
  {
    id: 5,
    name: "FishEye",
    description: "Application de photographie",
    technos:[javascript, sass],
    gitUrl: "https://github.com/BaracusHanson/FISHEYE_",
    liveUrl: "https://baracushanson.github.io/FISHEYE_/",
    imageUrl: fisheye,
  },
  {
    id: 6,
    name: "Game-On",
    description: "Application de jeu en ligne",
    technos:[css, html],
    gitUrl: "https://github.com/BaracusHanson/Game-On",
    liveUrl: "https://baracushanson.github.io/FISHEYE_/",
    imageUrl: fisheye,
  },
  {
    id: 7,
    name: "OhMyFood",
    description: "Application de commande de repas",
    technos:[javascript, css,html],
    gitUrl: "https://github.com/BaracusHanson/OhMyFood",
    liveUrl: "https://baracushanson.github.io/OhMyFood/",
    imageUrl: food,
  },
  {
    id: 8,
    name: "Learn@Home",
    description: "Application de cours en ligne",
    technos:[react, nodejs],
    gitUrl: "https://github.com/BaracusHanson/OhMyFood",
    liveUrl: "https://baracushanson.github.io/OhMyFood/",
    imageUrl: food,
  },
  {
    id: 9,
    name: "Billed",
    description: "Application de facturation",
    technos:[react, nodejs],
    gitUrl: "https://github.com/BaracusHanson/OhMyFood",
    liveUrl: "https://baracushanson.github.io/OhMyFood/",
    imageUrl: food,
  },
];

export default projects;
