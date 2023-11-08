"use client";
import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { CarContext } from "@/context/CarContext";

const SingleCar = ({ id }: any) => {
  const { cars } = useContext(CarContext);

  useEffect(() => {
    console.log(id);
    console.log(cars);
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 h-screen gap-x-5 place-items-center m-5">
        {cars &&
          cars
            .filter((car) => car.id.toLowerCase() == id.toLowerCase())
            .map((car, index) => (
              <div key={index} className="card-normal w-96 h-96 bg-base-200 shadow-md rounded-md mb-5 mr-5 ml-5">
                <figure className="m-5">
                  <img className="rounded-md" src={car.img} alt={car.make} />
                </figure>
                <h2 className="card-title justify-center m-5">{car.make + " " + car.model}</h2>
                <h4 className="card-body text-center">{car.id}</h4>
              </div>
            ))}
        <div className="divider-horizontal bg-base-content"></div>
      </div>
    </>
  );
};

export default SingleCar;
