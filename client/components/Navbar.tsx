"use client";
import Link from "next/link";
import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-200">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link href="/cars/" className="btn btn-ghost normal-case text-xl">
          Cars
        </Link>
        <Link href="/cars/new/" className="btn btn-ghost normal-case text-xl">
          Add Car
        </Link>
        <Search />
      </div>
    </>
  );
};

export default Navbar;
