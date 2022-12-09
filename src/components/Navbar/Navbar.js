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

      <div className="py-1">
        <img src="https://api.lorem.space/image/face?w=150&h=150" alt="user-avatar" className="h-9 w-9 sm:h-12 sm:w-12 rounded-full object-cover" />
      </div>
    </nav>
  );
};

export default Navbar;
