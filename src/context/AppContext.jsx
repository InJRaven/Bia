import React, { createContext, useState, useEffect, useCallback } from "react";
import { translations } from "../utils/Translation/Translation";
import instance from "../utils/Axios/AxiosInstance";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("vi"); // Mặc định là Tiếng Việt

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== language) {
      setLanguage(savedLanguage); // Cập nhật nếu không trùng với giá trị hiện tại
    }
  }, []); // Chạy lần đầu tiên khi component mount

  const changeLanguage = () => {
    const newLang = language === "vi" ? "en" : "vi";
    setLanguage(newLang);
    localStorage.setItem("language", newLang); // Lưu trạng thái vào localStorage
  };

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let translation = translations[language];

      for (let i = 0; i < keys.length; i++) {
        translation = translation ? translation[keys[i]] : null;
        if (translation === null || translation === undefined) {
          return key; // Trả về key nếu không có bản dịch
        }
      }
      return translation;
    },
    [language]
  );


  useEffect(() => {
    const test = async () => {
      try {
        const res = await instance.get('products-by-categories')
        console.log(res.data)
      } catch (error) {
        console.log(error)  
      }
    }
    test()
  }, [])
  return (
    <AppContext.Provider value={{ language, t, changeLanguage, instance }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
