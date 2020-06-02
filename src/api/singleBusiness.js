import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const searchApiById = async (id) => {
    try {
      const resp = await yelp.get(`/:${id}`, {
        params: {
          limit: 50,
          term: id,
          location: "san jose",
        },
      });

      setResults(resp.data.businesses);
    } catch (err) {
      console.log(err);
      setErrMsg("som'n went wrong!");
    }
  };

  useEffect(() => {
    searchApi(id);
  }, []);

  return [searchApiById, errMsg, results];
};
