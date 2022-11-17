import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const source = axios.CancelToken.source();

    async function fetchData() {
      try {
        let response = await axios.get(url, {
          cancelToken: source.token,
        });
        let data = response && response.data ? response.data : [];
        setData(data.reverse());
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
