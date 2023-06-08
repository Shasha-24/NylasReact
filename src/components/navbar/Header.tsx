import React from "react";

type Props = {
  name: string;
};

const Header: React.FC<Props> = ({ name }) => {
  return (
    <header className="header">
      <h1 className="title">{name}</h1>
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
