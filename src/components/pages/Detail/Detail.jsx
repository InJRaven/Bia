import { Link } from "react-router-dom";
import "./Detail.scss";
import Card from "../../ui/Card/Card";
import productImg from "../../../assets/img/product.png";

import preview1 from "../../../assets/img/detail/1.webp";
import preview2 from "../../../assets/img/detail/2.webp";
import preview3 from "../../../assets/img/detail/3.webp";
import preview4 from "../../../assets/img/detail/4.webp";
import preview5 from "../../../assets/img/detail/5.webp";

const Detail = () => {
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
            CƠ NHẢY RHINO VOYAGER USA 13,9Mmm
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
          <p className="text-md text-dark leading-[3rem]">
            <strong>1.Phá Rhino VOYAGER - USA Break Cue:</strong>
            <br />
            Cơ Phá VOYAGER - USA Break Cue: sự kết hợp giữa sức mạnh, độ chính
            xác và thiết kế táo bạo. Được chế tạo bằng vật liệu tiên tiến, đầu
            tẩy Bakelite một lớp duy nhất. Công nghệ cốt lõi của Rhino đảm bảo
            những cú đánh mạnh mẽ, có kiểm soát. Lấy cảm hứng từ lá cờ Hoa Kỳ,
            cơ này mang đến hiệu suất và phong cách nổi bật.
            <br />
            Thông tin sản phẩm
            <br />
            <br />
            <strong>• Chiều dài:</strong> 30 inch
            <br />
            <br />
            <strong>• Tẩy:</strong> Bakelite
            <br />
            <br />
            <strong>
              • Kích thước đầu tẩy được sản xuất theo kích thước tiêu chuẩn của
              Rhino:
            </strong>{" "}
            ~ 13,0 mm.
            <br />
            <br />
            <strong>• Thuôn chuyên nghiệp</strong>
            <br />
            <br />
            <strong> • Chất liệu:</strong> 100% sợi Carbon
            <br />
            <br />
            <strong>2. Chuôi gậy phá Cue Butt:</strong>
            <br />
            <br />
            <strong>
              • Chiều dài: 29 inch
              <br />
              • Khớp nối: 3/8-8 bằng thép không gỉ
              <br />
              • Chất liệu: Composite
              <br />
              Bảo vệ khớp: Bao gồm.
              <br />
              <br />
              Tay cầm: Thiết kế hình lá cờ Hoa Kỳ tạo độ ma sát
              <br />
              Hệ thống nạp bu lông trọng lượng hỗ trợ
            </strong>
          </p>
        </div>
      </section>

      <section className="py-[1.6rem] flex flex-col gap-[1.6rem]">
        <h2 className="uppercase text-display-sm font-bold">
          SẢN PHẨM LIÊN QUAN
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
