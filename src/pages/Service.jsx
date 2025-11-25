import React from "react";
import { services } from "../data/services";

const Services = () => {
  return (
    <div className="container mx-auto px-6 py-14">
      <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Our Diagnostic Services
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        We provide reliable and high-precision diagnostic services to ensure
        accurate medical support. All services below are available across our branches.
      </p>

      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-white shadow-md hover:shadow-2xl transition-all p-6 rounded-2xl border border-blue-100 cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition duration-300"
            />

            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {service.name}
            </h3>

            <p className="text-gray-600 text-sm">
              Trusted by thousands of patients with quality assurance and timely reports.
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
