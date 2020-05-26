import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const searchApi = async (initial) => {
    try {
      const resp = await yelp.get("/search", {
        params: {
          limit: 50,
          term: initial,
          location: "san jose",
        },
      });
      console.log("searched");
      setResults(resp.data.businesses);
    } catch (err) {
      console.log(err);
      setErrMsg("som'n went wrong!");
    }
  };

  useEffect(() => {
    searchApi("jollof");
  }, []);

  return [errMsg, searchApi, results];
};
