"use client";
import SingleCar from "@/components/SingleCar";
import { CarProvider } from "@/context/CarContext";
import { useParams } from "next/navigation";

import React from "react";

const Page = () => {
  const { id } = useParams();
  return (
    <>
      <CarProvider>
        <SingleCar id={id} />
      </CarProvider>
    </>
  );
};

export default Page;
