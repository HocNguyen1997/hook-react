import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    try {
      async function fetchData() {
        let response = await axios.get(url);
        let data = response && response.data ? response.data : [];
        setData(data.reverse());
        setIsLoading(false);
        setIsError(false);
      }
      fetchData();
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, isError };
};

export default useFetch;
