import React, { useState } from "react";
import { Header } from "../../components";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import {
  Link,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Result = () => {
  const [searchParams] = useSearchParams();
  const [show, setShow] = useState({ click: false });
  const [menuShow, setMenuShow] = useState({ click: true });
  const paramCategory = searchParams.get("category");
  const paramSearch = searchParams.get("search");
  const [search, setSearch] = useState(paramSearch);
  const [category, setCategory] = useState(paramCategory);

  const handleShowClick = () => {
    setShow({ ...show, click: !show.click });
  };

  const handleMenuClick = () => {
    setMenuShow({ ...menuShow, click: !menuShow.click });
  };

  const navigate = useNavigate();

  const items = [
    {
      label: "All Category",
      key: "All Category",
    },
    {
      label: "Car",
      key: "Car",
    },
    {
      label: "Bike",
      key: "Bike",
    },
    {
      type: "divider",
    },
    {
      label: "Jewellery",
      key: "Jewellery",
    },
  ];

  const handleClick = () => {
    if (search !== "") {
      navigate({
        pathname: "/list",
        search: `?${createSearchParams({
          search: search,
          category: category,
        })}`,
      });
    }
  };

  const handleDropdownItemClick = (e) => {
    setCategory(e.key);
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="flex py-10">
          <Dropdown
            menu={{
              items: items,
              onClick: handleDropdownItemClick,
              defaultSelectedKeys: category,
            }}
            trigger={["click"]}
          >
            <Link onClick={(e) => e.preventDefault()}>
              <Button className="flex-shrink-0 z-10 inline-flex items-center py-5 px-4 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300">
                <Space>
                  {category}
                  <DownOutlined />
                </Space>
              </Button>
            </Link>
          </Dropdown>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 focus:outline-none w-full z-20 text-sm text-gray-900 bg-white rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 dark:placeholder-gray-400"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-gray-800 rounded-r-lg border focus:ring-4 focus:outline-none"
              onClick={handleClick}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-white">
          <div>
            {menuShow.click === true ? (
              <div
                className="relative z-40 lg:hidden"
                role="dialog"
                aria-modal="true"
              >
                <div className="fixed inset-0 z-40 flex">
                  <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        onClick={handleMenuClick}
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      >
                        <span className="sr-only">Close menu</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          onClick={handleMenuClick}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>

                      <div className="border-t border-gray-200 px-4 py-6">
                        <h3 className="-mx-2 -my-3 flow-root">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                            aria-controls="filter-section-mobile-0"
                            aria-expanded="false"
                          >
                            <span className="font-medium text-gray-900">
                              Color
                            </span>
                            <span className="ml-6 flex items-center">
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>
                        </h3>
                        <div className="pt-6" id="filter-section-mobile-0">
                          <div className="space-y-6">
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-color-0"
                                name="color[]"
                                value="white"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-color-0"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                White
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-color-1"
                                name="color[]"
                                value="beige"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-color-1"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Beige
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-color-2"
                                name="color[]"
                                value="blue"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-color-2"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Blue
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-color-3"
                                name="color[]"
                                value="brown"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-color-3"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Brown
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-color-4"
                                name="color[]"
                                value="green"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-color-4"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Green
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-color-5"
                                name="color[]"
                                value="purple"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-color-5"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Purple
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-6">
                        <h3 className="-mx-2 -my-3 flow-root">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                            aria-controls="filter-section-mobile-1"
                            aria-expanded="false"
                          >
                            <span className="font-medium text-gray-900">
                              Category
                            </span>
                            <span className="ml-6 flex items-center">
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>
                        </h3>
                        <div className="pt-6" id="filter-section-mobile-1">
                          <div className="space-y-6">
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-category-0"
                                name="category[]"
                                value="new-arrivals"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-category-1"
                                name="category[]"
                                value="sale"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-category-1"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Sale
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-category-2"
                                name="category[]"
                                value="travel"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-category-2"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Travel
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-category-3"
                                name="category[]"
                                value="organization"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-category-3"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Organization
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-category-4"
                                name="category[]"
                                value="accessories"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-category-4"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Accessories
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-6">
                        <h3 className="-mx-2 -my-3 flow-root">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                            aria-controls="filter-section-mobile-2"
                            aria-expanded="false"
                          >
                            <span className="font-medium text-gray-900">
                              Size
                            </span>
                            <span className="ml-6 flex items-center">
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>
                        </h3>
                        <div className="pt-6" id="filter-section-mobile-2">
                          <div className="space-y-6">
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-size-0"
                                name="size[]"
                                value="2l"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-size-0"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                2L
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-size-1"
                                name="size[]"
                                value="6l"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-size-1"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                6L
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-size-2"
                                name="size[]"
                                value="12l"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-size-2"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                12L
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-size-3"
                                name="size[]"
                                value="18l"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-size-3"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                18L
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-size-4"
                                name="size[]"
                                value="20l"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-size-4"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                20L
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-size-5"
                                name="size[]"
                                value="40l"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-size-5"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                40L
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-baseline justify-between pb-6 pt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-500">Result</h1>

                <div className="flex items-center">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                        id="menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={handleShowClick}
                      >
                        Sort
                        <svg
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {show.click === true ? (
                      <div
                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <div className="py-1" role="none">
                          <Link
                            to="#"
                            className="font-medium text-gray-900 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                          >
                            Most Popular
                          </Link>
                          <Link
                            to="#"
                            className="text-gray-500 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                          >
                            Best Rating
                          </Link>
                          <Link
                            to="#"
                            className="text-gray-500 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            Newest
                          </Link>
                          <Link
                            to="#"
                            className="text-gray-500 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-3"
                          >
                            Price: Low to High
                          </Link>
                          <Link
                            to="#"
                            className="text-gray-500 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-4"
                          >
                            Price: High to Low
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>

                  <button
                    type="button"
                    className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                  >
                    <span className="sr-only">View grid</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                    onClick={handleMenuClick}
                  >
                    <span className="sr-only">Filters</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <section
                aria-labelledby="products-heading"
                className="pb-24 pt-6"
              >
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  <form className="hidden lg:block">
                    <h3 className="sr-only">Categories</h3>

                    <div className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-0"
                          aria-expanded="false"
                        >
                          <span className="font-medium text-gray-900">
                            Color
                          </span>
                          <span className="ml-6 flex items-center">
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div className="pt-6" id="filter-section-0">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input
                              id="filter-color-0"
                              name="color[]"
                              value="white"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-color-0"
                              className="ml-3 text-sm text-gray-600"
                            >
                              White
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-color-1"
                              name="color[]"
                              value="beige"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-color-1"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Beige
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-color-2"
                              name="color[]"
                              value="blue"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-color-2"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Blue
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-color-3"
                              name="color[]"
                              value="brown"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-color-3"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Brown
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-color-4"
                              name="color[]"
                              value="green"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-color-4"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Green
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-color-5"
                              name="color[]"
                              value="purple"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-color-5"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Purple
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-1"
                          aria-expanded="false"
                        >
                          <span className="font-medium text-gray-900">
                            Category
                          </span>
                          <span className="ml-6 flex items-center">
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div className="pt-6" id="filter-section-1">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input
                              id="filter-category-0"
                              name="category[]"
                              value="new-arrivals"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-0"
                              className="ml-3 text-sm text-gray-600"
                            >
                              New Arrivals
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-category-1"
                              name="category[]"
                              value="sale"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-1"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Sale
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-category-2"
                              name="category[]"
                              value="travel"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-2"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Travel
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-category-3"
                              name="category[]"
                              value="organization"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-3"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Organization
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-category-4"
                              name="category[]"
                              value="accessories"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-4"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Accessories
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-2"
                          aria-expanded="false"
                        >
                          <span className="font-medium text-gray-900">
                            Size
                          </span>
                          <span className="ml-6 flex items-center">
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div className="pt-6" id="filter-section-2">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input
                              id="filter-size-0"
                              name="size[]"
                              value="2l"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-size-0"
                              className="ml-3 text-sm text-gray-600"
                            >
                              2L
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-size-1"
                              name="size[]"
                              value="6l"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-size-1"
                              className="ml-3 text-sm text-gray-600"
                            >
                              6L
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-size-2"
                              name="size[]"
                              value="12l"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-size-2"
                              className="ml-3 text-sm text-gray-600"
                            >
                              12L
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-size-3"
                              name="size[]"
                              value="18l"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-size-3"
                              className="ml-3 text-sm text-gray-600"
                            >
                              18L
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-size-4"
                              name="size[]"
                              value="20l"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-size-4"
                              className="ml-3 text-sm text-gray-600"
                            >
                              20L
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-size-5"
                              name="size[]"
                              value="40l"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-size-5"
                              className="ml-3 text-sm text-gray-600"
                            >
                              40L
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="lg:col-span-3">
                    <div className="max-w-sm mb-10 w-full lg:max-w-full lg:flex">
                      <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        style={{ backgroundImage: "url('/p5.png')" }}
                        title="Woman holding a mug"
                      ></div>
                      <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                          <div className="text-gray-900 font-bold text-xl mb-2">
                            Can coffee make you a better developer?
                          </div>
                        </div>
                        <div className="flex items-center">
                          <img
                            className="w-10 h-10 rounded-full mr-4"
                            src="/p5.png"
                            alt="Avatar of Jonathan Reinink"
                          />
                          <div className="text-sm">
                            <p className="text-gray-900 leading-none">
                              Jonathan Reinink
                            </p>
                            <p className="text-gray-600">Aug 18</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="max-w-sm mb-10 w-full lg:max-w-full lg:flex">
                      <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        style={{ backgroundImage: "url('/p5.png')" }}
                        title="Woman holding a mug"
                      ></div>
                      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                          <div className="text-gray-900 font-bold text-xl mb-2">
                            Can coffee make you a better developer?
                          </div>
                        </div>
                        <div className="flex items-center">
                          <img
                            className="w-10 h-10 rounded-full mr-4"
                            src="/p5.png"
                            alt="Avatar of Jonathan Reinink"
                          />
                          <div className="text-sm">
                            <p className="text-gray-900 leading-none">
                              Jonathan Reinink
                            </p>
                            <p className="text-gray-600">Aug 18</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
