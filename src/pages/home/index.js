import Cards from "../../components/Cards";
import Categories from "../../components/Categories";
import List from "../../components/List";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Footer, Header } from "../../components";
import { Modal } from "antd";
import Storage from "../../services/Storage.services";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { createSearchParams, useNavigate } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Category");
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
    console.log(e.key);
    setCategory(e.key);
  };
  useEffect(() => {
    const Location = Storage.getLocation();
    if (!Location) {
      setOpen(true);
    } else setOpen(false);
  }, []);

  const handleOk = () => {
    if (!Location) {
      setOpen(false);
    }
  };

  const handleCancel = () => {
    if (Location) {
      setOpen(false);
    }
  };

  return (
    <>
      <Header />
      <Modal
        title="Location"
        centered
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <p>Select your location...</p>
        <input
          type="search"
          className="block p-2.5 focus:outline-none w-full z-20 text-sm text-gray-900 bg-white rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 dark:placeholder-gray-400"
          placeholder="Search your location"
        />
        <List />
      </Modal>
      <div className="bg-white container">
        <div className="flex mt-14">
          <Dropdown
            menu={{ items: items, onClick: handleDropdownItemClick }}
            trigger={["click"]}
          >
              <Button className="flex-shrink-0 z-10 inline-flex items-center py-5 px-4 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300" onClick={(e) => e.preventDefault()}>
                <Space>
                  {category}
                  <DownOutlined />
                </Space>
              </Button>
          </Dropdown>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 focus:outline-none w-full z-20 text-sm text-gray-900 bg-white rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 dark:placeholder-gray-400"
              placeholder="Search"
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
        <List />
        <h1 className="font-bold text-2xl text-center mt-8 ">Categories</h1>
        <Categories />
        {/* <Carousal /> */}
        <h1 className="font-bold text-2xl text-center mt-8 ">Top Picks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          <Cards />
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Home;
