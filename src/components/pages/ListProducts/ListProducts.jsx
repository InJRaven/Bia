import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { Link } from "react-router-dom";
import "./ListProducts.scss";
import Card from "../../ui/Card/Card";


const ListProducts = () => {
  const { language, t, instance } = useContext(AppContext);
  const [data, setData] = useState([])
  useEffect(()=> {
    const fetchData = async () => {
      try {
        const res = await instance.get('products')
        setData(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[language])

  const values = t("products.title");
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
            <option value={language === "vi" ? "Tất Cả" : "All"}>
              {language === "vi" ? "Tất Cả" : "All"}
            </option>

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
            <option value={language === "vi" ? "Tất Cả" : "All"}>
              {language === "vi" ? "Tất Cả" : "All"}
            </option>
            <option value="desc">
              {language === "vi" ? "Từ Cao -> Thấp" : "High To Low"}
            </option>
            <option value="asc">
              {language === "vi" ? "Từ Thấp -> Cao" : "Low To High"}
            </option>
          </select>
        </div>
      </div>
      <div className="list-products">
        {data.map((item) => (
          <Link to="/detail" key={item.id}>
            <Card
              url={item.main_image}
              alt={item.name}
              nameCard={item.name}
              price={`${t('products.price')}${item.price}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ListProducts;
