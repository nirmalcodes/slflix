import { Menu } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";
// import UserCircleOutline from "../Icons/UserCircleOutline";
// import ChevronDown from "../Icons/ChevronDown";
import { ChevronDownIcon } from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand text-red-600">
        SLflix
      </Link>

      <Menu as="div" className="relative">
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Profile
          <ChevronDownIcon className=""/>
          </Menu.Button>
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>  
    </nav>
  );
};

export default Navbar;
