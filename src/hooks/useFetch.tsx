import { useEffect, useState } from "react";
import { Blog } from "../interfaces/Blog";

const useFetch = (url: string) => {
  const [data, setData] = useState([] as Blog[]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null as unknown as string);

  // Can use this useEffect to fetch data
  useEffect(() => {
    // setTimeOut -> to simulate data that slow and only reached after 2 seconds
    setTimeout(() => {
      // get data
      fetch(url)
        .then((res) => {
          // console.log(res);
          if (!res.ok) {
            throw Error("could not fetch the blog data. status: " + res.status);
          }
          return res.json();
        })
        .then((data) => {
          // set error back to null
          setError(null as unknown as string);
          setData(data);
        })
        .catch((err: Error) => {
          console.log("Error retriving blog data. Error: ", err);
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  }, [url]);
  // "[]" leave it empty/remove if to run this functions once during component load
  // any changes to the url will trigger this function

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
