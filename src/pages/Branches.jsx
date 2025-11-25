import React from "react";
import { branches } from "../data/branches";
import ReviewCarousel from "../components/ReviewCarousel";

const Branches = () => {
  return (
    <div className="bg-blue-50 min-h-screen px-6 py-10">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Our Branches
      </h2>

      <div className="grid md:grid-cols-2 gap-6 px-6">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="bg-white shadow p-6 rounded-xl border border-blue-100 flex flex-col justify-between h-[350px] hover:shadow-xl transition duration-200"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-blue-700">{branch.name}</h3>
              <p className="text-gray-600">{branch.city}</p>
              <p className="font-semibold">
                Contact Person:{" "}
                <span className="text-gray-700 font-normal">{branch.contactPerson}</span>
              </p>
              <p className="text-blue-500 font-semibold hover:underline cursor-pointer">
                {branch.phone}
              </p>
            </div>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Get Directions
            </button>
          </div>
        ))}
      </div>

      <ReviewCarousel />
    </div>
  );
};

export default Branches;
