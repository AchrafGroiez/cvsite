import React from "react"

export default function Biblio(param) {
    const {id, authorLast, authorFirst, title, compagny, day, month, year, link} = param
    return (
    <div className="Biblio">
      <p>
        {id}. {authorLast} {authorFirst} “{title}” <i>{compagny}</i> {day} {month} {year} <a className="bluelink" href={link}>{link}</a></p>  
    </div>
  );
}