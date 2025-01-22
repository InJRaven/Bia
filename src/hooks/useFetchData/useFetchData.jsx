import { useEffect, useState } from "react";
import instance from "../../utils/Axios/AxiosInstance";

const useFetchData = (url, language) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(url);
        setData(res.data);
      } catch (error) {
        setError(err);
      }
    };
    fetchData();
  }, [language]);

  return { data, loading, error };
};

export default useFetchData;
