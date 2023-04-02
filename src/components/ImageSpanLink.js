import React from "react"

export default function ImageSpanLink(param) {
  return (
    <div className="ImageSpanLink totalFlexCol">
        <a className="img-link projet-a" href={param.link} target="_blank" rel="noreferrer">
            <p className="projet-img-text">{param.titre}</p>
            <img id={param.id} className="portfolio-img" src={param.src} alt="img"/>
        </a>
        <p className="desc">{param.desc}</p>
    </div>
  );
}