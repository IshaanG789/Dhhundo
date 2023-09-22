import React, { useState } from "react";
import { Link } from "react-router-dom";
import Storage from "../services/Storage.services";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState({ click: false });
  const handleClick = () => {
    setShow({ ...show, click: !show.click });
  };
  let details;
  if (typeof window !== "undefined") {
    details = localStorage.getItem("userDetails");
  }

  const ShowMenu = () => {
    setMenu({ ...menu, click: !menu.click });
  };
  
  return (
    <>
      <nav className="bg-white-800 border-b">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={ShowMenu}
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
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
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to={"/"}>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=500"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to={Storage.getUserData() ? "/post" : "/signup" }
                    className="text-gray-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {" "}
                    Post{" "}
                  </Link>
                  <Link to="#"
                    className="text-gray-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {" "}
                    Privacy{" "}
                  </Link>
                  <Link to="#"
                    className="text-gray-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {" "}
                    Career{" "}
                  </Link>
                  <Link to="/about-us"
                    className="text-gray-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {" "}
                    About us{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              {details ? (
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                  {show.click === true ? (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabindex="-1"
                    >
                      <Link to="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </Link>
                      <Link to="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        Settings
                      </Link>
                      <Link to="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </Link>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <>
                <Link to="/login">
                  <button className="mx-4 px-3 py-3 rounded text-white font-bold uppercase text-xs bg-gray-700 hover:bg-gray-900 hover:text-white">
                    SignIn
                  </button>
                </Link>
                 <Link to="/signup">
                 <button className="mx-4 px-3 py-3 rounded text-white font-bold uppercase text-xs bg-gray-700 hover:bg-gray-900 hover:text-white">
                   SignUp
                 </button>
               </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {menu.click === true ? (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link to="/post"
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Post
              </Link>

              <Link to="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Privacy
              </Link>
              <Link to="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Career
              </Link>
              <Link to="/aboutus"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                About us
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
};

export default Header;
