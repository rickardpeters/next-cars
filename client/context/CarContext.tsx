import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export interface Car {
  id: string;
  make: string;
  model: string;
  img: string;
}

// Create the context with an empty array as default value
export const CarContext = createContext<{
  cars: Car[];
  setCars: React.Dispatch<React.SetStateAction<Car[]>>;
}>({
  cars: [],
  setCars: () => {},
});

// Create a context provider component
export const CarProvider = ({ children }: any) => {
  const [cars, setCars] = useState<Car[]>([]);
  useEffect(() => {
    getCars();
  }, []);
  // Function to fetch cars
  const getCars = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/cars/");
      setCars(res.data);
    } catch (error) {
      console.error("There was an error fetching the cars:", error);
      setCars([]);
    }
  };

  return <CarContext.Provider value={{ cars, setCars }}>{children}</CarContext.Provider>;
};

// Custom hook to use the CarContext
export const useCars = () => useContext(CarContext);
