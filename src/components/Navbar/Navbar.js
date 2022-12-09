import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand text-red-600">
        SLflix
      </Link>

      <Menu as="div" className="relative">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Profile
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              show={open}
              enter="transform transition ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition ease-in duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active, disabled }) => (
                      <a
                        href="#"
                        className={`flex items-center px-4 py-2 text-sm 
                  ${
                    disabled
                      ? "text-gray-300"
                      : active
                      ? "bg-indigo-500 text-white"
                      : "text-gray-700"
                  }`}
                      >
                        <UserCircleIcon
                          className={`mr-3 h-5 w-5 ${
                            disabled
                              ? "text-gray-200"
                              : active
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                          aria-hidden="true"
                        />{" "}
                        Profile 1
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item disabled>
                    {({ active, disabled }) => (
                      <a
                        href="#"
                        className={`flex items-center px-4 py-2 text-sm 
                  ${
                    disabled
                      ? "text-gray-300"
                      : active
                      ? "bg-indigo-500 text-white"
                      : "text-gray-700"
                  }`}
                      >
                        <UserCircleIcon
                          className={`mr-3 h-5 w-5 ${
                            disabled
                              ? "text-gray-200"
                              : active
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                          aria-hidden="true"
                        />{" "}
                        Profile 2
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active, disabled }) => (
                      <a
                        href="#"
                        className={`flex items-center px-4 py-2 text-sm 
                  ${
                    disabled
                      ? "text-gray-300"
                      : active
                      ? "bg-indigo-500 text-white"
                      : "text-gray-700"
                  }`}
                      >
                        <UserCircleIcon
                          className={`mr-3 h-5 w-5 ${
                            disabled
                              ? "text-gray-200"
                              : active
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                          aria-hidden="true"
                        />{" "}
                        Profile 3
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active, disabled }) => (
                      <a
                        href="#"
                        className={`flex items-center px-4 py-2 text-sm 
                  ${
                    disabled
                      ? "text-gray-300"
                      : active
                      ? "bg-indigo-500 text-white"
                      : "text-gray-700"
                  }`}
                      >
                        <UserCircleIcon
                          className={`mr-3 h-5 w-5 ${
                            disabled
                              ? "text-gray-200"
                              : active
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                          aria-hidden="true"
                        />{" "}
                        Profile 4
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active, disabled }) => (
                      <a
                        href="#"
                        className={`flex items-center px-4 py-2 text-sm 
                  ${
                    disabled
                      ? "text-gray-300"
                      : active
                      ? "bg-indigo-500 text-white"
                      : "text-gray-700"
                  }`}
                      >
                        <ArrowRightOnRectangleIcon
                          className={`mr-3 h-5 w-5 ${
                            disabled
                              ? "text-gray-200"
                              : active
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                          aria-hidden="true"
                        />{" "}
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Fragment>
        )}
      </Menu>
    </nav>
  );
};

export default Navbar;
