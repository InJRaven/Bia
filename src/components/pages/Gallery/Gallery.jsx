import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";

const Gallery = ({ language, instance }) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDataGallery = async () => {
      try {
        const res = await instance.get("galleries");
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataGallery();
  }, []);

  console.log(data);
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
          {data.map((item) => (
            <img
              key={item.id}
              src={item.image_url}
              alt={item.title}
              className="ư-full h-auto rounded-[0.6rem]"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};

export default Gallery;
