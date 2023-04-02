import React from "react"
import tpfinale from "../images/tpfinale.png"
import tp04 from "../images/tp04.png"
import tp02 from "../images/tp02.png"
import ImageSpanLink from "../components/ImageSpanLink";

export default function Projet() {
  const tab = [
    {
      id : 2,
      titre : "TP-Finale",
      src : tpfinale,
      class : "portfolio-img",
      link : "https://achrafgroiez.github.io/TP-Final-Session1/html/index.html",
      desc : "Le TP-finale(Session 1) est un petit site web de débutant que j'ai fait dans le cours Création de Site Web, j'ai enlevé cependant quelques morceaux de la version originale et j'ai corrigé les liens pour que cela fonctionne sur Github Pages."
    },

    {
      id : 1,
      titre : "TP04",
      src : tp04,
      class : "portfolio-img",
      link : "https://achrafgroiez.github.io/TP04/",
      desc : "Le TP04(Session 1) est un générateur de mot de passe fait dans le cours Création de Site Web, mais si vous regardez le code javascript vous allez tombez de votre chaise."
    },

    {
      id : 0,
      titre : "TP02",
      src : tp02,
      class : "portfolio-img",
      link : "https://achrafgroiez.github.io/TP02/",
      desc : "Le TP02(Session 1) est un site web de débutant fait dans le cours Création de Site Web, j'ai modifié les liens pour que cela fonctionne."
    }
  ]
  return (
    <div className="Projet">
      <title>AG - Projet</title>
      <div className="pictures">
      {
        tab.map((value) =>
          <ImageSpanLink desc={value.desc} link={value.link} key={value.id} class={value.class} titre={value.titre} src={value.src} />
        )
        }
      </div>
    </div>
  );
}