"use client";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://media.cnn.com/api/v1/images/stellar/prod/160812164522-small-car-10.jpg?q=w_3106,h_2304,x_0,y_0,c_fill/h_618)",
        }}
      >
        <div className="hero-content text-center fixed top-60">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Here you can view and add collections of different cars around the
              world. Enjoy!
            </p>
            <Link href="/cars">
              <button className="btn btn-warning">Check out the cars</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
