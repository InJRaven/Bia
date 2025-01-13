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
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

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

  return (
    <section className="w-full gallery">
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
