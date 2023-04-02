import React from "react"

export default function Reservation() {
  return (
    <div className="Reservation">
        <p>Payment fictif</p>
      <div className="payment">
        <img className="payment-pic" src={paypal} alt="img"/>
        <img className="payment-pic" src={amex} alt="img"/>
        <img className="payment-pic" src={visa} alt="img"/>
        <img className="payment-pic" src={mastercard} alt="img"/>
      </div>

      <div>
        <input className="display-link" type="button" onClick={handleClick} value="Menu"/> 
        <ul className="nav-content">
          <br></br>
          {menu ? (
            <div>
              <li className="border"><NavLink to="/" className="nav-link">Accueil</NavLink></li> 
              <li className="border"><NavLink to="/cv" className="nav-link">CV</NavLink></li> 
              <li className="border"><NavLink to="/projet" className="nav-link">Projet</NavLink></li> 
              <li className="border"><NavLink to="/bibliographie" className="nav-link">BibliographieSite</NavLink></li> 
              <li className="border"><NavLink to="/dessin" className="nav-link">DessinSite</NavLink></li> 
            </div>
          ) : (
            <div>
            </div>
          )
          }
          </ul>
      </div>
    </div>
  );
}
