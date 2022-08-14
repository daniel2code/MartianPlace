import Image from "next/image";
import React from "react";
import { starCup, arrowRight } from "../../../assets/icons";

const CardList = ({ children, icon, title, border, grid, fullWidth }) => {
  return (
    <section
      className={`${fullWidth ? `w-full` : `w-full`} ${
        fullWidth === true ? "lg:w-full" : `lg:w-full`
      } mt-7`}
    >
      <div>
        <div
          className="flex items-center justify-between mb-4 pb-3"
          style={{ borderBottom: border ? "2px solid #2d333d" : "" }}
        >
          <div className="flex items-center">
            {icon && (
              <div className="flex items-center justify-center">
                <Image src={icon || starCup} />
              </div>
            )}
            {title && (
              <h5 className="ml-4 font-bold">
                {" "}
                {title || "Trending Projects"}
              </h5>
            )}
          </div>
          {title && (
            <div className="flex items-center">
              <h5 className="font-semibold text-base">View All</h5>
              <div className="ml-4">
                <Image src={arrowRight} />
              </div>
            </div>
          )}
        </div>
        <div
          className={
            grid === true
              ? `grid lg:grid-cols-4 sm:grid-cols-2 gap-4 items-center justify-items-center grid-cols-1`
              : "card-section"
          }
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default CardList;
