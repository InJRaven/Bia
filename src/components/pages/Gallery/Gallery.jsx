import img1 from "../../../assets/img/gallery/1.jpg";
import img2 from "../../../assets/img/gallery/2.jpg";
import img3 from "../../../assets/img/gallery/3.jpg";
import img4 from "../../../assets/img/gallery/4.jpg";
import img5 from "../../../assets/img/gallery/5.jpg";
import img6 from "../../../assets/img/gallery/6.jpg";
import img7 from "../../../assets/img/gallery/7.jpg";
import img8 from "../../../assets/img/gallery/8.jpg";
import img9 from "../../../assets/img/gallery/9.jpg";
import img10 from "../../../assets/img/gallery/10.jpg";
import img11 from "../../../assets/img/gallery/11.jpg";
import img12 from "../../../assets/img/gallery/12.jpg";
import img13 from "../../../assets/img/gallery/13.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const Gallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
  ];

  const { language } = useContext(AppContext);
  return (
    <section className="w-full flex flex-col gap-[1.6rem] py-[2rem] gallery">
      <div className="inline-flex gap-[1.6rem] items-stretch w-full">
        <button className="w-full text-sm border border-gray-500 transition duration-200 px-[1rem] py-[0.6rem] rounded-[0.6rem] font-medium hover:border-gray-900 hover:shadow-button">
          {language === "vi" ? "Tất Cả" : "All"}
        </button>
        <button className="w-full text-sm border border-gray-500 transition duration-200 px-[1rem] py-[0.6rem] rounded-[0.6rem] font-medium hover:border-gray-900 hover:shadow-button">
          {language === "vi" ? "Cơ Phá" : "Break Cue"}
        </button>
        <button className="w-full text-sm border border-gray-500 transition duration-200 px-[1rem] py-[0.6rem] rounded-[0.6rem] font-medium hover:border-gray-900 hover:shadow-button">
          {language === "vi" ? "Cơ Nhảy" : "Jump Cue"}
        </button>
        <button className="w-full text-sm border border-gray-500 transition duration-200 px-[1rem] py-[0.6rem] rounded-[0.6rem] font-medium hover:border-gray-900 hover:shadow-button">
          {language === "vi" ? "Cơ Đánh" : "Billard Cue"}
        </button>
        <button className="w-full text-sm border border-gray-500 transition duration-200 px-[1rem] py-[0.6rem] rounded-[0.6rem] font-medium hover:border-gray-900 hover:shadow-button">
          {language === "vi" ? "Phụ Kiện" : "Billiard Accessories"}
        </button>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index}`}
              className="ư-full h-auto rounded-[0.6rem]"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};

export default Gallery;
