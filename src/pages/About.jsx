import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-600 text-white text-center py-10 shadow-lg">
        <h1 className="text-4xl font-bold">About Kumar Diagnostic Centre</h1>
        <p className="text-lg mt-2">
          Trusted Diagnostic Services Since 1995
        </p>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-10">
          
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-7">
            Kumar Diagnostic Centre is committed to delivering accurate, reliable, and 
            affordable diagnostic services to the community. With advanced equipment and 
            trained medical professionals, we ensure high-quality reports that help patients 
            receive the right treatment at the right time.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-7">
            Our mission is to provide the best diagnostic solutions using modern 
            medical technologies while ensuring precision, patient comfort, and 
            trustworthy service.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
            Why Choose Us?
          </h2>

          <ul className="text-gray-600 space-y-3 pl-5 list-disc">
            <li>Experienced medical and technical staff</li>
            <li>Latest diagnostic machines and equipment</li>
            <li>Affordable and transparent pricing</li>
            <li>Fast and accurate reporting</li>
            <li>Multiple branches for better accessibility</li>
          </ul>

          <div className="mt-10 border-l-4 border-blue-500 pl-4">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-7">
              To become the most trusted and accessible diagnostic centre network 
              across Uttar Pradesh while maintaining international standards of quality.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
