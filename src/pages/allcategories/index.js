import Header from "../components/Header";
import React from "react";

const allcategories = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div
          className="bg-cover bg-center h-auto text-white text-right ml-20 py-60 px-10 object-fill"
          style={{
           backgroundColor : '#374151'
          }}
        >
            <div className="md:w-1/2">
        <p className="text-3xl font-bold">All Categories</p>
        </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="mt-4">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">Category</h2>
            <ul className="max-w-md mb-6 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Sub Category 1</li>
              <li>Sub Category 2</li>
              <li>Sub Category 3</li>
              <li>Sub Category 4</li>
              <li>Sub Category 5</li>
              <li>Sub Category 6</li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">Category</h2>
            <ul className="max-w-md mb-6 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Sub Category 1</li>
              <li>Sub Category 2</li>
              <li>Sub Category 3</li>
              <li>Sub Category 4</li>
              <li>Sub Category 5</li>
              <li>Sub Category 6</li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">Category</h2>
            <ul className="max-w-md mb-6 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Sub Category 1</li>
              <li>Sub Category 2</li>
              <li>Sub Category 3</li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">Category</h2>
            <ul className="max-w-md mb-6 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Sub Category 1</li>
              <li>Sub Category 2</li>
              <li>Sub Category 3</li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">Category</h2>
            <ul className="max-w-md mb-6 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Sub Category 1</li>
              <li>Sub Category 2</li>
              <li>Sub Category 3</li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">Category</h2>
            <ul className="max-w-md mb-6 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Sub Category 1</li>
              <li>Sub Category 2</li>
              <li>Sub Category 3</li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">Category</h2>
            <ul className="max-w-md mb-6 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Sub Category 1</li>
              <li>Sub Category 2</li>
              <li>Sub Category 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default allcategories;
