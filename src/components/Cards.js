
import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      <Link
        to={`/product`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
        <img width={500} height={500} alt="shoes" className="MenuImage" src="/car.jpeg" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Car</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;100000</p>

            <p className="text-base font-medium line-through">&#8377;120000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              10% off
            </p>
          </div>
        </div>
      </Link>
      <Link
        to={`/product`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <img width={500} height={500} alt="shoes" className="MenuImage" src="/cloth.jpeg" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Cloth</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;100000</p>

            <p className="text-base  font-medium line-through">&#8377;120000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              10% off
            </p>
          </div>
        </div>
      </Link>
      <Link
        to={`/product`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <img width={500} height={500} alt="shoes" className="MenuImage" src="/real1.jpeg" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Product name</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;100000</p>

            <p className="text-base  font-medium line-through">&#8377;120000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              10% off
            </p>
          </div>
        </div>
      </Link>
      <Link
        to={`/product`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <img width={500} height={500} alt="shoes" className="MenuImage" src="/cloth2.webp" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Cloth</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;100000</p>

            <p className="text-base  font-medium line-through">&#8377;120000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              10% off
            </p>
          </div>
        </div>
      </Link>
      <Link
        to={`/product`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <img width={500} height={500} alt="shoes" className="MenuImage" src="/real2.jpg" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Real Estate</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;100000</p>

            <p className="text-base  font-medium line-through">&#8377;120000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              10% off
            </p>
          </div>
        </div>
      </Link>
      <Link
        to={`/product`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <img width={500} height={500} alt="shoes" className="MenuImage" src="/car2.webp" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Car</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;100000</p>

            <p className="text-base  font-medium line-through">&#8377;120000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              10% off
            </p>
          </div>
        </div>
      </Link>
      <Link
        to={`/product`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <img width={500} height={500} alt="shoes" className="MenuImage" src="/car2.webp" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Car</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;100000</p>

            <p className="text-base  font-medium line-through">&#8377;120000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              10% off
            </p>
          </div>
        </div>
      </Link>
      <Link
        to={`/product`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <img width={500} height={500} alt="shoes" className="MenuImage" src="/car2.webp" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Car</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;100000</p>

            <p className="text-base  font-medium line-through">&#8377;120000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              10% off
            </p>
          </div>
        </div>
      </Link>
  
    </>
  );
};

export default Cards;
