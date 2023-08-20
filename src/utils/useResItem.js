import axios from "axios";
import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useResItem = (id) => {
  const [itemList, setItemList] = useState(null);

  useEffect(() => {
    axios.get(RES_API + id).then((res) => {
      setItemList(res.data);
    });
  }, []);

  return itemList;
};

export default useResItem;
