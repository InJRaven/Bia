import { Link } from "react-router-dom";
import Card from "../../ui/Card/Card";
import productImg from "../../../assets/img/product.png";
import { useContext } from "react";
import { TranslationContext } from "../../../context/TranslationContext";

import "./ListProducts.scss";
const ListProducts = () => {
  const { language, t } = useContext(TranslationContext);
  const product = t("products.product");
  const values = t("products.title");
  const data = [
    {
      id: 1,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 2,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 3,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 4,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 5,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 6,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 7,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 8,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 9,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 10,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 11,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 12,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
  ];
  return (
    <section className="w-full flex flex-col gap-[1.6rem] py-[2rem] products">
      <div className="w-full inline-flex justify-between items-center">
        <div className="inline-flex gap-[1rem] items-center form-group">
          <label htmlFor="title" className="text-md text-dark font-medium">
            {language === "vi" ? "Loại:" : "Category:"}
          </label>
          <select
            className="text-sm  font-semibold transition duration-300 border border-gray-500 rounded-[0.6rem] p-[0.6rem] outline-none hover:cursor-pointer hover:border-gray-900 focus:border-gray-900"
            name=""
            id=""
          >
            <option value={language === "vi" ? "Tất Cả" : "All"}>{language === "vi" ? "Tất Cả" : "All"}</option>

            {values.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="inline-flex gap-[1rem] items-center form-group">
          <label htmlFor="title" className="text-md text-dark font-medium">
            {language === "vi" ? "Giá:" : "Price:"}
          </label>
          <select
            className="text-sm font-semibold transition duration-300 border border-gray-500 rounded-[0.6rem] p-[0.6rem] outline-none hover:cursor-pointer hover:border-gray-900 focus:border-gray-900"
            name=""
            id=""
          >
             <option value={language === "vi" ? "Tất Cả" : "All"}>{language === "vi" ? "Tất Cả" : "All"}</option>
            <option value="desc">{language === "vi" ? "Từ Cao -> Thấp" : "High To Low"}</option>
            <option value="asc">{language === "vi" ? "Từ Thấp -> Cao" : "Low To High"}</option>
          </select>
        </div>
      </div>
      <div className="list-products">
        {data.map((item) => (
          <Link to="/detail" key={item.id}>
            <Card
              key={item.id}
              url={item.url}
              alt={item.alt}
              nameCard={item.nameCard}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ListProducts;
