import React from "react";
import "./formulaire.css"

type Props = {
  name: string;
};

export function Formulaire() {
  return (
    <div className="form-structor">
      <div className="signup">
        <h2 className="form-title" id="signup">
          <span></span> S'inscrire
        </h2>
        <div className="form-holder">
          <div className="box1">
            <input type="text" className="input" placeholder="Nom" />
          </div>
          <div className="box2">
            <input type="email" className="input" placeholder="Email" />
          </div>
          <div className="box3">
            <input
              type="password"
              className="input"
              placeholder="mot de passe"
            />
          </div>
        </div>
        <div className="sinscrire-bouton">
          <button className="submit-btn">S'inscrire</button>
        </div>
      </div>
      <div className="login slide-up">
        <div className="center">
          <h2 className="form-title" id="login">
            <span></span> Se connecter
          </h2>
          <div className="form-holder">
            <div className="box4">
              <input type="email" className="input" placeholder="Email" />
            </div>
            <div className="box5">
              <input
                type="password"
                className="input"
                placeholder="mot de passe"
              />
            </div>
          </div>
          <div className="connecter-bouton">
            {" "}
            <button className="submit-btn">Se connecter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
