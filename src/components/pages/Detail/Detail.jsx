import { Link } from "react-router-dom";
import "./Detail.scss";
import Card from "../../ui/Card/Card";
import productImg from "../../../assets/img/product.png";

import preview1 from "../../../assets/img/detail/1.webp";
import preview2 from "../../../assets/img/detail/2.webp";
import preview3 from "../../../assets/img/detail/3.webp";
import preview4 from "../../../assets/img/detail/4.webp";
import preview5 from "../../../assets/img/detail/5.webp";
import { useContext } from "react";
import { TranslationContext } from "../../../context/TranslationContext";

const Detail = () => {
  const { language, t } = useContext(TranslationContext);
  const detail = t("products.detail");
  const product = t("products.product");

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
  ];
  return (
    <>
      <section className="grid grid-cols-[_0.9fr_0.75fr] gap-[3rem] product">
        <div className="col-span-1 row-span-1 flex flex-col gap-[1rem] product__preview">
          <div className="w-full aspect-square bg-gray-500 product__img">
            <img
              src={preview1}
              alt=""
              className="w-full h-full aspect-square object-cover"
            />
          </div>
          <div className="w-full aspect-[16/3] grid grid-cols-4 gap-[1rem] group__img">
            <div className="w-full aspect-square bg-gray-500 group__img--item">
              <img
                src={preview2}
                alt=""
                className="w-full h-full aspect-square object-cover"
              />
            </div>
            <div className="w-full aspect-square bg-gray-500 group__img--item">
              <img
                src={preview3}
                alt=""
                className="w-full h-full aspect-square object-cover"
              />
            </div>
            <div className="w-full aspect-square bg-gray-500 group__img--item">
              <img
                src={preview4}
                alt=""
                className="w-full h-full aspect-square object-cover"
              />
            </div>
            <div className=" w-full aspect-square bg-gray-500 group__img--item">
              <img
                src={preview5}
                alt=""
                className="w-full h-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 col-start-2 product__information">
          <h2 className="font-bold text-display-xs break-words">
            {detail.name}
          </h2>
        </div>
      </section>

      <section className="w-full flex flex-col gap-[2rem] items-stretch detail__description">
        <div className="border-b-2 border-gray-900 ">
          <span className="text-md font-medium uppercase bg-gray-900 float-start text-light px-[1.2rem] py-[0.8rem]">
            MÔ TẢ SẢN PHẨM
          </span>
        </div>
        <div className="box">
          <div
            className="text-md text-dark leading-[3rem]"
            dangerouslySetInnerHTML={{ __html: detail.description }}
          />
        </div>
      </section>

      <section className="py-[1.6rem] flex flex-col gap-[1.6rem]">
        <h2 className="uppercase text-display-sm font-bold">
          {language === "vi" ? "SẢN PHẨM LIÊN QUAN" : "RELATED PRODUCTS"}
        </h2>

        <div className="grid grid-cols-4 gap-[2rem] more-product">
          {data.map((item) => (
            <Link key={item.id}>
              <Card
                key={item.id}
                url={item.url}
                alt={item.alt}
                nameCard={item.nameCard}
                price={item.price}
                className={"hover:scale-[1.03]"}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Detail;
