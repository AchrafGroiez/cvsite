import React from "react"

export default function ImageSpan(param) {
  return (
    <div className="ImageSpan">
        <p className="projet-img-text">{param.titre}</p>
        <img id={param.id} className="projet-img" src={param.src} alt="img"/>
    </div>
  );
}