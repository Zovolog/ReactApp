import { useState, useEffect } from "react";

export const useRequest = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setData(result);
      })
      .catch((result) => console.log(result.data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, isLoading, setData };
};
