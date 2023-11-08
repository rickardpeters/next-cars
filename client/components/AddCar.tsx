"use client";
import React, { useState } from "react";

const AddCar = () => {
  const [id, setId] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [img, setImg] = useState("");

  const handleAdd = async () => {
    const data = {
      id: id,
      make: make,
      model: model,
      img: img,
    };

    const res = await fetch("http://127.0.0.1:8000/cars/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert(`Added ${make} ${model} with id ${id}`);
    setId("");
    setMake("");
    setModel("");
    setImg("");
    return res.json();
  };

  return (
    <div className="form-control h-screen place-items-center">
      <h1 className="m-5 text-2xl">Enter new car information:</h1>
      {img !== "" ? (
        <figure className="object-contain h-64 w-96 p-5">
          <img className="rounded-md" alt={make} src={img} />
        </figure>
      ) : null}
      <input
        value={id}
        type="text"
        placeholder="ID"
        className="input input-bordered w-full max-w-xs m-2"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)}
      />
      <input
        value={make}
        type="text"
        placeholder="Make"
        className="input input-bordered w-full max-w-xs m-2"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMake(e.target.value)}
      />
      <input
        value={model}
        type="text"
        placeholder="Model"
        className="input input-bordered w-full max-w-xs m-2"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setModel(e.target.value)}
      />
      <input
        value={img}
        type="text"
        placeholder="Image URL"
        className="input input-bordered w-full max-w-xs m-2"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImg(e.target.value)}
      />
      <button onClick={handleAdd} className="btn btn-wide">
        Add new car
      </button>
    </div>
  );
};

export default AddCar;
