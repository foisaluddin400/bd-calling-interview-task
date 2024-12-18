"use client";

import { category } from "@/lib/category";
import Title from "../shared/Title";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CategoryCard from "../card/CategoryCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";

const Category = () => {
  const splideRef = useRef(null);

  const handlePrevClick = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("<"); 
    }
  };

  const handleNextClick = () => {
    if (splideRef.current) {
      splideRef.current.splide.go(">"); 
    }
  };

  return (
    <div className="mb-11">
      <div className="ml-4">
        <div className="flex justify-between">
          <Title head={"category"} title={"Browse By Category"}></Title>
          <div className="flex gap-2 md:mt-20 mt-11 mr-4">
            <div onClick={handlePrevClick}>
              <div className="bg-neutral-300 hover:bg-orange-600 hover:text-white rounded-full text-2xl p-2 text-gray-500 cursor-pointer">
                <FaArrowLeft />
              </div>
            </div>
            <div onClick={handleNextClick}>
              <div className="bg-neutral-300 hover:bg-orange-600 hover:text-white rounded-full text-2xl p-2 text-gray-500 cursor-pointer">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div>
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 5,
            gap: "1rem",
            arrows: false, 
            pagination: false,
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
          aria-label="Category Slide"
        >
          {category.map((item, index) => (
            <SplideSlide key={index}>
              <CategoryCard item={item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Category;
