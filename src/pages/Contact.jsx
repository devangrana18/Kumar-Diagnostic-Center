import React from "react";
import { branches } from "../data/branches";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">

      <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Have questions? We're here to help.  
      </p>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
+
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Send a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-semibold"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="space-y-5">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Our Branches
          </h2>

          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white shadow-md p-5 rounded-lg border-l-4 border-blue-600"
            >
              <h3 className="text-lg font-bold text-blue-700">{branch.name}</h3>
              <p className="text-gray-600">{branch.city}</p>
              <p className="text-gray-600">
                Contact Person: <strong>{branch.contactPerson}</strong>
              </p>
              <p className="text-gray-600">
                Phone: <strong>{branch.phone}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Find Us on Map</h2>
        <iframe
          title="Location Map"
          className="rounded-lg shadow-lg w-full h-72"
          src="https://maps.app.goo.gl/PULoSyzSr9nHFWXh8"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
