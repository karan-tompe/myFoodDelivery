import React, { useEffect, useState } from "react";
import Card from "./Card";
import { createBrowserRouter, Link } from "react-router-dom";
import Shemmer from "./Shemmer";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [resFilteredData, setResFilteredData] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  // const onlineStatus = useOnlineStatus();
  // console.log("online", onlineStatus);
  const resListData = () => {
    fetch(
      // https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log(
        //   "DATA",
        //   result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        //     ?.restaurants
        // );
        setResData(
          result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setResFilteredData(
          result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      })
      .catch((err) => console.log(err.message));
  };

  const handleRating = () => {
    setResFilteredData(
      resFilteredData.filter((val) => {
        return val.info.avgRating > 4;
      })
    );
  };
  const handleRemoveFilter = () => {
    setResFilteredData(resData);
    setSearchQuery("");
  };
  useEffect(() => {
    resListData();
  }, []);

  if (resFilteredData == null) return <Shemmer />;

  return (
    <div className="">
      <div className="flex p-2">
        <input
          className="border-black rounded border-solid border-2 p-0 "
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-slate-400 p-1 m-2"
          onClick={() =>
            setResFilteredData(
              resData.filter((val) =>
                val.info.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
            )
          }
        >
          Search
        </button>

        <button className="bg-slate-400 p-1 m-2" onClick={handleRating}>
          Rating Above 4
        </button>
        <button className="bg-slate-400 p-1 m-2" onClick={handleRemoveFilter}>
          Remove Filter
        </button>
      </div>
      <div className="flex flex-wrap mx-auto h-2 w-10/12">
        {resFilteredData.map((res, index) => {
          console.log("res", res);
          return (
            <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
              <Card res={res} />
            </Link>
          );
          // console.log(res.data.name);
        })}
      </div>
    </div>
  );
};

export default Body;
