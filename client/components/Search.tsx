import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
  const [carId, setCarId] = useState("");
  const router = useRouter();

  return (
    <div className="m-4 place-items-center relative">
      <input
        placeholder="Search car ID..."
        className="input h-10 pr-20"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCarId(e.target.value)}></input>
      <button
        className="btn btn-ghost absolute right-0 scale-75"
        onClick={() => router.push(`http://localhost:3000/cars/${carId}`)}>
        Search
      </button>
    </div>
  );
};

export default Search;
