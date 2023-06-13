import React from "react";
import "./Header.css"

type Props = {
  name: string;
};

const Header: React.FC<Props> = ({ name }) => {
  return (
    <header>
      <div className="principale">
        <div id="logo">
          <a id="logo" href="/">
            {" "}
            <span id="logo">N</span>ylas
          </a>
        </div>
        <ul className="navbar">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/nosproduits">Nos produits</a>
          </li>
          <li>
            <a href="/panier">Panier</a>
          </li>
          <li>
            <a href="/formulaire">Se connecter/s'inscrire</a>
          </li>
          <li>
            <a href="/nouscontacter">Nous contacter</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

/*<button className="bouton"></button>

type Props = {
  name: string;
  presentation: string;
};

function Header({ name, presentation}: Props) {
  return (
    <div>
      Bonjour {name}, j'ai commencer {presentation} 
    </div>
  );
}
 

export default Header;*/
