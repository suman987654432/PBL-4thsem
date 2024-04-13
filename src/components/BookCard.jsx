import React from "react";
import { arrow_right } from "../assets";

const BookCard = ({ image, title, subtitle, linkText }) => {
  return (
    <div className="max-w-md mb-6 mx-auto bg-n-6/50 rounded-xl shadow-md overflow-hidden md:max-w-2xl w-[300px]">
      <div className="md:flex flex-col items-center">
        {" "}
        <div className="md:flex-shrink-0 mb-8">
          <img
            className="h-48 w-full object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="px-8 pb-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <h5 className="h6 mt-2">{subtitle}</h5>
          <div className="mt-10">
            <a
              className="ml-auto font-code text-sm font-bold text-[#E41F7B] uppercase tracking-wider cursor-pointer hover:underline underline-offset-4"
              href="#"
            >
              <div className="flex items-center">
                <span>{linkText}</span>
                <img
                  className="order-1 w-4 ml-2"
                  src={arrow_right}
                  alt="icon"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
