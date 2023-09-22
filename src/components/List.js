import React from "react";
import { useNavigate } from "react-router-dom";
import Storage from "../services/Storage.services";

const List = () => {

  const navigate = useNavigate();
  const handleClick = (name) => {
    navigate(`/list?location=${name}&search=&category=All+Category`);
    Storage.setLocation(name)
  }
  const data = [
    {
      name: "Ahmedabad",
      url: "ahmedabad.png",
    },
    {
      name: "Delhi",
      url: "delhi.png",
    },
    {
      name: "Bangalore",
      url: "bangalore.png",
    },
    {
      name: "Pune",
      url: "pune.png",
    },
    {
      name: "Chennai",
      url: "chennai.png",
    },
    {
      name: "Mumbai",
      url: "mumbai.png",
    },
    {
      name: "Hyderabad",
      url: "hyderabad.png",
    },
    {
      name: "Kolkata",
      url: "kolkata.png",
    },
    {
      name: "Lucknow",
      url: "lucknow.png",
    },
    {
      name: "Jaipur",
      url: "jaipur.png",
    },
  ];

  return (
    <>
      <div className="mt-14"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-14 px-5 md:px-0">
        {data.map((datas, index) => (
          <ul key={index}>
              <li role="list" className="divide-gray-100" onClick={() => handleClick(datas.name)}>
                <img src={`/${datas.url}`} className="m-3" alt="locations" />
                <h1 className="font-semiBold text-2xl">{datas.name}</h1>
              </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default List;
