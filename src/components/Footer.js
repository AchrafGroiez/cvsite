import React, {useState} from "react"
import paypal from "../images/paypal.jpg"
import amex from "../images/amex.jpg"
import visa from "../images/visa.jpg"
import mastercard from "../images/mastercard.jpg"
import {NavLink} from "react-router-dom"


export default function Footer() {
    const startYear = 2023
    const tab = new Date()
    const [menu, setMenu] = useState(false)

    function handleClick(event){
      if(menu == false){
        setMenu(true)
      }

      else{
        setMenu(false)
      }
    }
    return (
    <div className="Footer">
        <p className="toCenter">Copyright &copy; - Achraf Groiez {tab.getFullYear()}. All rights reserved.</p>
    </div>
  );
}