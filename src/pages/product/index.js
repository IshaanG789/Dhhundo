import Header from "../components/Header";
import ProductDetailsCarousel from "../components/ProductDetailsCarousel";
import React from "react";


const product = () => {
  return (
    <>
      <Header />
      <div className="flex py-20 container flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
        {/* left column start */}
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
        <ProductDetailsCarousel images='/real1.jpeg' />
        </div>
        {/* left column end */}

        {/* right column start */}
        <div className="flex-[1] py-3">
          {/* PRODUCT TITLE */}
          <div className="text-[34px] font-semibold mb-2 leading-tight">
            Shoes
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-lg font-semibold mb-5">Shoes</div>

          {/* PRODUCT PRICE */}
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold">MRP : &#8377;1000</p>
                <p className="text-base  font-medium line-through">
                  &#8377;1200
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  10% off
                </p>
          </div>

          <div className="text-md font-medium text-black/[0.5]">
            incl. of taxes
          </div>
          <div className="text-md font-medium text-black/[0.5] mb-20">
            {`(Also includes all applicable duties)`}
          </div>

          {/* PRODUCT SIZE RANGE START */}
          <div className="mb-10">
            {/* HEADING START */}
            <div className="flex justify-between mb-2">
              <div className="text-md font-semibold">Select Size</div>
              <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                Select Guide
              </div>
            </div>
            {/* HEADING END */}

            {/* SIZE START */}
            <div id="sizesGrid" className="grid grid-cols-3 gap-2">
              <div
                // className={`border rounded-md text-center py-3 font-medium ${
                //   item.enabled
                //     ? "hover:border-black cursor-pointer"
                //     : "cursor-not-allowed bg-black/[0.1] opacity-50"
                // } ${selectedSize === item.size ? "border-black" : ""}`}
                onClick={() => {
                  setSelectedSize(item.size);
                  setShowError(false);
                }}
              >
                8
              </div>
            </div>
            {/* SIZE END */}

      
          </div>
        </div>
      </div>
    </>
  );
};

export default product;

