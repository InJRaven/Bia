import Button from "../../../ui/Button/Button";
import HeadingSection from "../HeadingSection/HeadingSection";
import Card from "../../../ui/Card/Card";
import { Link } from "react-router-dom";
import "./Section.scss";
const Section = ({
  title,
  typeButton,
  link,
  textButton,
  iconButtonLeft,
  iconButtonRight,
  data,
}) => {
  return (
    <section className="w-full flex flex-col items-center gap-[1rem] py-[2rem] section__container">
      <HeadingSection title={title} />
      <div className="w-full grid grid-cols-4 gap-[2rem] p-[1.6rem] border border-gray-500 rounded-[0.6rem] relative list-card">
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
      </div>
      <Button
        as={typeButton}
        link={link}
        text={textButton}
        iconLeft={iconButtonLeft}
        iconRight={iconButtonRight}
      />
    </section>
  );
};
export default Section;
