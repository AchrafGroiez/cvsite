import React from "react"

export default function CV() {
  return (
    <div className="CV GlobalSize">
      <div className="exp">
        <title>AG - CV</title>
          <h1>Expériences</h1>
          <hr />
          <h3 className="notbold">22 août 2022 – 23 décembre 2022</h3>
          <b>Session 1 Cégep Marie-Victorin</b>
          <p>J’ai acquis des connaissances dans la programmation informatique (python, javascript et autres).Aussi,j’ai fait des projets et des exercices donnés par mes professeurs dans lequels j’ai pu tester et améliorer mes compétences en informatique. Dans ce lien github (<a className="bluelink" href="https://github.com/AchrafGroiez/CV" target="_blank" rel="noreferrer">https://github.com/AchrafGroiez/CV</a>) il y a quelques projets que j’avais fait au Cégep Marie-Victorin.</p>
          <br />
          <h3 className="notbold">En cours</h3>
          <b>Session 2 Cégep Marie-Victorin</b>
          <p>Je suis entrain d'apprendre le React, Java et SQL. La session à commencer le 23 janvier 2023 et va finir le 29 mai 2023, il reste un boût de chemin, à parcourir.</p> 
      </div>
      <br />

      <div className="parcours-scolaire">
        <h1>Parcours Scolaire</h1>
        <hr />
        <div className="line-height">
          <h3 className="notbold">2017 - 2022</h3>
          <b>Études secondaires</b>
          <p>Collège Saint-Jean Vianney</p>
          <br />
        </div>
        <div className="line-height">
          <h3 className="notbold">En cours</h3>
          <b>Technique de l'informatique</b>
          <p>Cégep Marie-Victorin</p>
        </div>
      </div>

      <div className="comp">
        <h1>Compétences</h1>
        <hr />
        <ul>
          <li><p>Français parlé (bon)</p></li>
          <li><p>Anglais parlé (basique)</p></li>
          <li><p>Français écrit (bon avec beaucoup de fautes grammaticales)</p></li>
          <li><p>Anglais écrit (basique avec beaucoup de fautes grammaticales)</p></li>
          <li><p>Connaissances d'étudiant en Python, Jvascript, HTML, CSS, React et Java</p></li>
        </ul>
      </div>

      <div>
        <h1>Intérêts</h1>
        <hr />
        <ul>
          <li>Finance</li>
          <li>Entreprenariat</li>
          <li>Site Web</li>
        </ul>
      </div>
    </div>
  );
}