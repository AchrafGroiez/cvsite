import React from "react"
import Accueil from "./pages/Accueil";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import CV from "./pages/CV";
import Projet from "./pages/Projet";
import Bibliographie from "./pages/Bibliographie";
import Dessin from "./pages/Dessin";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <div className="app-content">
        <Navbar />
        <br />
        <Routes>
          <Route path="/cvsite/" Component={Accueil}></Route>
          <Route path="/cvsite/cv/" Component={CV}></Route>
          <Route path="/cvsite/projet/" Component={Projet}></Route>
          <Route path="/cvsite/bibliographie/" Component={Bibliographie}></Route>
          <Route path="/cvsite/dessin/" Component={Dessin}></Route>
          <Route path="/cvsite/*" Component={NotFound}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
