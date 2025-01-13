
import Banner from "./Banner/Banner";
import Section from "./Section/Section";
import productImg from "../../../assets/img/product.png";

const Home = () => {
  const data = [
    {
      id: 1,
      url: productImg,
      alt: "Card Product",
      nameCard: "CƠ PHÁ BREACH BREAK GHOST EDITION",
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
  ];
  return (
    <>
      <div className="w-full col-start-2 col-span-4 flex flex-col items-center gap-[1.5rem] container">
        <Banner />
        <Section
          title={"Cơ Nhảy"}
          typeButton="link"
          link="/products"
          textButton="Xem tất cả"
          iconButtonRight={<i className="ki-outline ki-arrow-right" />}
          data={data}
        />
        <Section
          title={"CƠ PHÁ"}
          typeButton="link"
          link="/products"
          textButton="Xem tất cả"
          iconButtonRight={<i className="ki-outline ki-arrow-right" />}
          data={data}
        />

        <Section
          title={"PHỤ KIỆN"}
          typeButton="link"
          link="/products"
          textButton="Xem tất cả"
          iconButtonRight={<i className="ki-outline ki-arrow-right" />}
          data={data}
        />
      </div>
      <div></div>
    </>
  );
};

export default Home;
