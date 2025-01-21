import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations } from "../utils/Translation/Translation";

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("vi"); // Mặc định là Tiếng Việt

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = () => {
    const newLang = language === "vi" ? "en" : "vi";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };
  const t = useCallback((key) => {
    const keys = key.split(".");
    let translation = translations[language];

    // Traverse nested keys
    for (let i = 0; i < keys.length; i++) {
      translation = translation ? translation[keys[i]] : null;
      if (translation === null || translation === undefined) {
        return key; // Return the key itself if translation is not found
      }
    }
    return translation;
  }, [language]);
  // Đảm bảo `children` được render đúng cách trong `TranslationProvider`
  return (
    <TranslationContext.Provider
      value={{
        t,
        language,
        changeLanguage,
      }}
    >
      {children} {/* children được render ở đây */}
    </TranslationContext.Provider>
  );
};
