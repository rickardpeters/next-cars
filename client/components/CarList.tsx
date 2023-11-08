"use client";
import React, { useContext } from "react";
import { CarContext } from "../context/CarContext";
import { usePathname, useRouter } from "next/navigation";

const CarList = () => {
  const { cars } = useContext(CarContext);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-screen gap-x-5 place-items-center m-5">
      {cars &&
        cars.map((car, index) => (
          <div
            key={index}
            className="card-normal w-96 h-84 bg-base-200 shadow-md rounded-md mb-5 mr-5 ml-5 hover:scale-105 transition ease-in-out cursor-pointer "
            onClick={() => router.push(`${pathname}/${car.id}`)}>
            <figure className="m-5 relative grid place-items-center">
              <img className="rounded-md max-h-44" src={car.img} alt={car.make} />
            </figure>
            <h2 className="card-title justify-center m-5">{car.make + " " + car.model}</h2>
            <h4 className="card-body text-center">{car.id}</h4>
          </div>
        ))}
      <div className="divider-horizontal bg-base-content"></div>
    </div>
  );
};

export default CarList;
