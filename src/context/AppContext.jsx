import { createContext, useCallback, useEffect, useState } from "react";
import instance from "../utils/Axios/AxiosInstance";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sidabar, setSidebar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("products/2");
        console.log(response.data);
      } catch (error) {
        console.error("Error: ", err);
      }
    };

    fetchData()
  },[]);

  return <AppContext.Provider value={sidabar}>{children}</AppContext.Provider>;
};

export default AppProvider;
