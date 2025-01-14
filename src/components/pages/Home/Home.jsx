import { useContext } from "react";
import Banner from "./Banner/Banner";
import Section from "./Section/Section";
import productImg from "../../../assets/img/product.png";
import { TranslationContext } from "../../../context/TranslationContext";

const Home = () => {
  const { t } = useContext(TranslationContext);
  const product = t("products.product");
  const title = t("products.title");

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
      <div className="w-full col-start-2 col-span-4 flex flex-col items-center gap-[1.5rem] container">
        <Banner />
        {title.map((item, index) => {
          console.log(item);
          return (
            <Section
              key={index}
              title={item}
              typeButton="link"
              link="/products"
              textButton={t("button.all")}
              iconButtonRight={<i className="ki-outline ki-arrow-right" />}
              data={data}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
