import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

type Props = {
  name: string;
};

export function Footer() {
  return (
    <footer>
      <div className="login-banner">
        <div className="fin">
          <ul className="finbar">
            <li>
              <Link to="/nous-contacter">Nous contacter</Link>{" "}
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
}

export default Footer;
