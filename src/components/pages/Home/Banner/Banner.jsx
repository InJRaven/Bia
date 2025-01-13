import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "../../../../assets/img/image1.png";
import img2 from "../../../../assets/img/image2.png";
import img3 from "../../../../assets/img/image3.png";
import "./Banner.scss";
import { Autoplay, Pagination } from "swiper/modules";
const Banner = () => {
  const slides = [img1, img2, img3];
  return (
    <section className="w-full h-[70vh] relative banner">
      <div className="slide-show w-full h-full">
        <Swiper
          spaceBetween={0} // Space between slides
          slidesPerView={1} // Show one slide at a time
          loop={true} // Infinite loop
          autoplay={{ delay: 3000 }} // Autoplay every 3 seconds
          pagination={{ clickable: true }} // Enable clickable pagination
          modules={[Autoplay, Pagination]} // Import necessary modules
          className="swiper-container"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
