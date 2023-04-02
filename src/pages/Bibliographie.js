import React from "react"
import Biblio from "../components/Biblio";

export default function Bibliographie() {
  const tab = [
    {
      id : 1,
      authorLast : "Blais,", 
      authorFirst : "Django.", 
      title : "Manipulation des dates/heures en Javascript - Expliqué en détail et avec plusieurs scripts très paratique.", 
      compagny : "TRUCSWEB,", 
      day : "2,", 
      month : "février.", 
      year : "2001,", 
      link : "http://www.trucsweb.com/tutoriels/javascript/tw276/"
    },

    {
      id : 2,
      authorLast : "", 
      authorFirst : "", 
      title : "Télécharger une image pour supprimer l'arrière-plan", 
      compagny : "kaleido,", 
      day : "", 
      month : "", 
      year : "", 
      link : "https://www.remove.bg/fr/upload"
    },

    {
      id : 3,
      authorLast : "", 
      authorFirst : "", 
      title : "Download Free Vector Brand Logos", 
      compagny : "logowik,", 
      day : "", 
      month : "", 
      year : "", 
      link :"https://logowik.com/"
    },

    {
      id : 4,
      authorLast : "", 
      authorFirst : "", 
      title : "Rendering Lists", 
      compagny : "Meta,", 
      day : "", 
      month : "", 
      year : "", 
      link : "https://react.dev/learn/rendering-lists"
    },

    {
      id : 5,
      title : "J'ai consulté des documents du cours React", 
    },

    {
      id : 6,
      title : "J'ai consulté un document du cours d'Anglais(Session 1)",
    }
  ]
  return (
    <div className="Bibliographie">
      <title>AG - Bibliographie</title>
      <h2>Lien consulté:</h2>
      <div>
        {
          tab.map((value) =>
            <Biblio key={value.id} id={value.id} authorLast={value.authorLast} authorFirst={value.authorFirst} title={value.title} compagny={value.compagny} day={value.day} month={value.month} year={value.year} link={value.link} />
          )
        }
      </div>
    </div>
  );
}