import React from "react";
import { RES_IMG_URL } from "../utils/constants";

const Card = ({ res }) => {
  const {
    name,
    cuisines,
    costForTwo,
    maxDeliveryTime,
    avgRating,
    cloudinaryImageId,
  } = res.info;

  return (
    <div className=" bg-gray-50 border-black w-56 p-4 m-4 hover:bg-gray-200 rounded">
      <img
        alt="res-img"
        className="w-full rounded "
        src={RES_IMG_URL + `${cloudinaryImageId}`}
      />
      <h3 className="font-bold items-start p-2"> {name} </h3>
      <p> {cuisines.slice(0, 2).join(", ")} </p>
      <h4> {costForTwo}</h4>
      <p> {maxDeliveryTime} </p>
      <p> {avgRating} </p>
    </div>
  );
};

export default Card;
