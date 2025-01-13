import { Link } from "react-router-dom";
import Card from "../../ui/Card/Card";

import productImg from "../../../assets/img/product.png";
import "./ListProducts.scss";
const ListProducts = () => {
  const data = [
    {
      id: 1,
      url: productImg,
      alt: "Card Product",
      nameCard:
        "CƠ PHÁ BREACH BREAK GHOST EDITION CƠ PHÁ BREACH BREAK GHOST EDITION CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
    {
      id: 2,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
    {
      id: 3,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
    {
      id: 4,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
    {
      id: 5,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
    {
      id: 6,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
    {
      id: 7,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
    {
      id: 8,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
    {
      id: 9,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
    {
      id: 10,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
    {
      id: 11,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
    {
      id: 12,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
      price: "Từ 12.000.000₫",
    },
  ];
  return (
    <section className="py-[2rem] list-products">
        {data.map((item) => (
          <Link to='/detail' key={item.id}>
            <Card
              key={item.id}
              url={item.url}
              alt={item.alt}
              nameCard={item.nameCard}
              price={item.price}
            />
          </Link>
        ))}
      </section>
  );
};

export default ListProducts;
