import "./panier.css"
import React, { useState } from "react";



interface Product {
  id: number;
  name: string;
  price: number;
}

const Panier: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const calculateTotalPrice = (): number => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1>Mon Panier</h1>
      <div>
        <h2>Votre panier :</h2>
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - Prix : {item.price}€{" "}
                <button onClick={() => removeFromCart(item.id)}>
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>Total : {calculateTotalPrice()}€</div>
      <div>
        <button
          onClick={() => addToCart({ id: 1, name: "Produit 1", price: 10 })}
        >
          Ajouter Produit 1
        </button>
        <button
          onClick={() => addToCart({ id: 2, name: "Produit 2", price: 20 })}
        >
          Ajouter Produit 2
        </button>
      </div>
    </div>
  );
};

export default Panier;