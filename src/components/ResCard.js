import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shemmer from "./Shemmer";
import useResItem from "../utils/useResItem";
import { RES_IMG_URL } from "../utils/constants";
import { FeatureProduct } from "./FeatureProduct";

const ResCard = () => {
  const { id } = useParams();

  const itemList = useResItem(id);

  if (itemList == null) return <Shemmer />;

  const items = itemList.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  const itemval =
    itemList.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) => {
        return (
          c.card["card"]["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log("itemvalitemval", itemval);

  const { name, cuisines, costForTwoMessage, avgRating } =
    itemList?.data.cards[0].card.card.info;
  return (
    <div className="w-8/12 mx-auto">
      <div className="flex justify-between">
        <div className="w-9/12">
          <h1 className="font-bold text-xl">{name}</h1>
          <h2 className="font-semibold">{cuisines.join(", ")}.</h2>
          <h3 className="font-semibold">{costForTwoMessage}</h3>
        </div>
        <div className="w-1/12 border">
          <p className="items-center  justify-center flex p-1">* {avgRating}</p>
          <hr />
          <p
            style={{ fontSize: "12px" }}
            className="items-center align-middle text-center m-auto"
          >
            10L+ Rating
          </p>
        </div>
      </div>
      <hr />

      <div className="w-full">
        {itemval.map((item) => {
          return (
            <div className="bg-gray-200 my-4 w-full">
              <FeatureProduct item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResCard;
