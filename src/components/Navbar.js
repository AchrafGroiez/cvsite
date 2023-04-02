import React from "react"
import {NavLink} from "react-router-dom"
import ordi from "../images/ordi.png"

export default function Navbar() {
  return (
    <div className="Navbar GlobalSize">
        <ul className="nav-content">
            <li><img className="ordi" src={ordi} alt="img" /></li>
            <li className="border">Achraf Groiez</li>
            <li className="border"><NavLink to="/cvsite/" className="nav-link">Accueil</NavLink></li> 
            <li className="border"><NavLink to="/cvsite/cv/" className="nav-link">CV</NavLink></li> 
            <li className="border"><NavLink to="/cvsite/projet/" className="nav-link">Projet</NavLink></li> 
            <li className="border"><NavLink to="/cvsite/bibliographie/" className="nav-link">BibliographieSite</NavLink></li> 
            <li className="border"><NavLink to="/cvsite/dessin/" className="nav-link">DessinSite</NavLink></li> 
        </ul>
    </div>
  );
}