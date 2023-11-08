"use client";

import React from "react";
import CarList from "../../components/CarList";
import Navbar from "../../components/Navbar";
import { CarProvider } from "../../context/CarContext";

const Cars = () => {
  return (
    <>
      <Navbar />
      <CarProvider>
        <CarList />
      </CarProvider>
    </>
  );
};

export default Cars;
