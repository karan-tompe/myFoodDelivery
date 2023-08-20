import React, { useState } from "react";
import { RES_IMG_URL } from "../utils/constants";

export const FeatureProduct = ({ item }) => {
  const [show, setShow] = useState(false);

  return (
    <div key={item.card.card.title} className="w-full">
      <div className="">
        <div
          className="flex justify-between px-2"
          onClick={() => setShow(!show)}
        >
          <div className="py-2 text-lg font-semibold  ">
            {item.card.card.title}
          </div>
          <div className="p-2 m-2">^</div>
        </div>
        <div>
          {show && (
            <div className=" bg-white">
              {item.card.card.itemCards.map((it) => {
                return (
                  <div className="flex justify-between py-2 border-b-2">
                    <div className="w-10/12">
                      <p className="font-bold text-md">{it.card.info.name}</p>
                      <p className="font-semibold">
                        {" "}
                        RS: {it.card.info.price / 100}
                      </p>
                      <p className="text-gray-400">
                        {" "}
                        {it.card.info.description}
                      </p>
                    </div>

                    <div className="w-1/12">
                      <img
                        className="w-full"
                        src={RES_IMG_URL + it.card.info.imageId}
                        alt="not found"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
