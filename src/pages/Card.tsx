import React from "react";

type Props = {
  title: string;
  price: number;
};

export default function Card({ title, price }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{price}</div>
    </div>
  );
}
