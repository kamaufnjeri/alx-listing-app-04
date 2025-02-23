import React from "react";
import { PropertyProps } from "../../interfaces";
import Link from "next/link";
import { FaBed, FaShower, FaStar, FaUsers } from "react-icons/fa";

const Card: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <Link
      href={`/property/${property?.id}`}
      className="border rounded-lg p-4 text-gay-800"
    >
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-56 object-cover rounded-t-lg"
      />
      <div className="flex flex-row gap-2 mt-4">
        {property.category.map((category, index) => (
          <span
            key={index}
            className="rounded-md p-1 bg-gray-200 text-gray-700"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="mt-2 flex flex-row justify-between">
        <h2 className="font-semibold text-gray-900 text-lg">{property.name}</h2>
        <span className="flex flex-row gap-1">
          <FaStar className="text-yellow-500 w-6 h-6" />
          <p>{property.rating}</p>
        </span>
      </div>
      <div className="mt-2 text-gray-500">
        <p>
         {property.address.city},
          {property.address.country}
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span className="flex flex-row gap-2">
          <span className="flex flex-row gap-1 items-center">
            <FaBed />
            <p>{property.offers.bed}</p>
          </span>
          <span className="flex flex-row gap-1 items-center">
            <FaShower />
            <p>{property.offers.shower}</p>
          </span>
          <span className="flex flex-row gap-1 items-center">
            <FaUsers />
            <p>{property.offers.occupants}</p>
          </span>
        </span>
        <div className="flex flex-row">
          <p className="text-gray-800 font-semibold text-lg">${property.price}</p>
          <p className="tect-gray-500 self-end">/m</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
