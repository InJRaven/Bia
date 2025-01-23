import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import DOMPurify from "dompurify";
import './Services.scss'
const Service = ({language, instance}) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDataServices = async () => {
      try {
        const res = await instance.get("services");
        if (res.data && res.data.data) {
          setData(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataServices();
  }, [language]);
  const sanitizedHtml =
    data.length > 0 && data[0].content
      ? DOMPurify.sanitize(data[0].content)
      : "";

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} className="p-[1.6rem] flex flex-col gap-[1.6rem] !text-md !font-medium break-words"/>
  );
};
export default Service;
