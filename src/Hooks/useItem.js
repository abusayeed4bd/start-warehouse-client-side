import { useEffect, useState } from "react";
import Spinner from "../pages/Shared/Spinner/Spinner";

const useItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://radiant-dusk-12584.herokuapp.com/iteams")
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          return <Spinner></Spinner>;
        } else {
          setItems(data);
        }
      });
  }, []);

  return [items, setItems];
};

export default useItem;
