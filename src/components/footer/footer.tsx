import React from "react";
import "./footer.css"

type Props = {
  name: string;
};

export function Footer()  {
  return (
    <footer>
      <div className="login-banner">
        <div className="fin">
          <ul className="finbar">
            <li>
              <a href="/nouscontacter">Nous contacter</a>
            </li>
            <li>
              <a href="#">Notre Newsletters</a>
            </li>
            <li>
              <a href="/formulaire">Rejoignez-nous</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer ;
