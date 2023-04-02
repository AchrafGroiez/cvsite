import React from "react"
import accueil from "../images/accueil.png"
import bibliographie from "../images/bibliographie.png"
import cv from "../images/CV.png"
import dessinsite from "../images/dessinsite.png"
import projet from "../images/projet.png"
import ImageSpan from "../components/ImageSpan";




export default function Dessin() {
  const tab = [
    {
      id : 0,
      titre : "Accueil",
      src : accueil,
    },

    {
      id : 1,
      titre : "CV",
      src : cv,
    },

    {
      id : 2,
      titre : "Projet",
      src : projet,
    },

    {
      id : 3,
      titre : "BibliographieSite",
      src : bibliographie,
    },

    {
      id : 4,
      titre : "DessinSite",
      src : dessinsite,
    }
  ]
  return (
    <div className="Dessin">
      <title>AG - DessinSite</title>
      <h1 className="toCenter">Plan du site fait sur <i>Word</i></h1>
      <div className="pictures">
        {
          tab.map((value) =>
            <ImageSpan class={value.class} titre={value.titre} src={value.src} key={value.id} />
          )
        }
      </div>
    </div>
  );
}