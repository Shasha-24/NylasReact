import { products } from "../data/product";
import Card from "./Card";
import styles from "./NewProductsPage.module.css";

type Props = {};

const NewProductsPage = (props: Props) => {
  return (
    <div className={styles.tableau}>
      {products.map((product) => (
        <Card key={product.id} title={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default NewProductsPage;

//moyen d'afficher des donnée en bouclant du tableau

/*composant card remplacer la logne div key...., afficher du contenu dynamique, un composant qui va recuperer les produits */

/*map parcours le tableau et stock dans un nouveau tableau qu'elle affiche*/

//map fonction de retourner un nouveau tableau


