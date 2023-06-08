export type Product = {
  id: number;
  name: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "pomme",
    price: 2,
  },
  {
    id: 2,
    name: "casquette",
    price: 8,
  },
  {
    id: 3,
    name: "bob",
    price: 12,
  },
  {
    id: 4,
    name: "voiture",
    price: 15000,
  },
];

export default Product;
