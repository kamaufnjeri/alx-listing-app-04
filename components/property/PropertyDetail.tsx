import { PropertyProps } from "@/interfaces/index";
import React from "react";
import {
  FaBed,
  FaConciergeBell,
  FaDumbbell,
  FaHandPointRight,
  FaParking,
  FaShower,
  FaStar,
  FaSwimmer,
  FaTemperatureHigh,
  FaUsers,
  FaWifi,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ReviewSection from "./ReviewSection";
import BookingSection from "./BookingSection";

interface Amenity {
  name: string;
  icon: React.ReactNode;
}

const SAMPLE_AMENITIES: Amenity[] = [
  { name: "WiFi", icon: <FaWifi /> },
  { name: "Swimming Pool", icon: <FaSwimmer /> },
  { name: "Air Conditioning", icon: <FaTemperatureHigh /> },
  { name: "Parking Facility", icon: <FaParking /> },
  { name: "Fitness Center", icon: <FaDumbbell /> },
  { name: "Concierge Service", icon: <FaConciergeBell /> },
];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (

    <div className="container mx-auto p-6 flex flex-col gap-4 text-gray-800">
      <div className="flex flex-col gap-0">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="flex items-center space-x-1">
            <FaStar className="text-yellow-500" />
            <p className="">{property.rating}</p>
          </span>
          <span className="flex items-center space-x-1">
            <FaLocationDot />
            <p className="">
              {property.address.city}, {property.address.country}
            </p>
          </span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="grid grid-cols-2 gap-2 h-full">
          {property.images.map((image, index) => (
            <img
              src={image}
              alt={property.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between items-center mt-4 text-gray-800 font-semibold">
        <span className="flex flex-col md:flex-row lg:flex-row gap-2">
          <span className="flex flex-row gap-2 items-center p-2 rounded-full bg-gray-100">
            <FaBed />
            <p>{property.offers.bed} Bedrooms</p>
          </span>
          <span className="flex flex-row gap-2 items-center p-2 rounded-full bg-gray-100">
            <FaShower />
            <p>{property.offers.shower} Bathroom</p>
          </span>
          <span className="flex flex-row gap-2 items-center p-2 rounded-full bg-gray-100">
            <FaUsers />
            <p>{property.offers.occupants} Guests</p>
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4">

      <div className="border-t-[1px] borde-gray-100 pt-4 lg:col-span-2">
        {/* Description */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-between  text-gray-400 font-semibold">
          <div className="flex lg:flex-row md:flex-row flex-col gap-3 self-start">
            <span className="text-green-600 pb-2 border-b-2 border-green-600">
              Description
            </span>
            <span>What we offer</span>
            <span>Reviews</span>
            <span>About host</span>
          </div>
          <span className="self-end">Published January 12, 20225</span>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <p>
            Welcome to {property.name}, located in the vibrant{" "}
            {property.address.city}, {property.address.country}. Whether you’re
            seeking a peaceful getaway, a family-friendly escape, or a luxurious
            stay, our property is designed to offer an exceptional experience
            that caters to every guest's needs. From stylish interiors and
            modern amenities to stunning views and convenient access to local
            attractions, {property.name} provides the perfect blend of comfort,
            convenience, and sophistication. Immerse yourself in a world of
            luxury as you explore the thoughtfully designed spaces, indulge in
            world-class amenities, and create lasting memories with your loved
            ones. Whether you’re looking to unwind by the pool, enjoy a private
            evening on the terrace, or explore the vibrant surroundings,
            [Property Name] ensures a memorable stay tailored to your desires.
          </p>
          <span className="flex space-x-2 items-center text-green-600">
            <p>Read more</p>
            <FaHandPointRight />
          </span>
        </div>

        {/* Amenities */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">What this place offers</h2>
          <ul className="flex flex-wrap space-x-4 mt-2">
            {property.category.map((amenity, index) => (
              <li key={index} className="bg-gray-200 p-2 rounded-md">
                {amenity}
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-2">
            {SAMPLE_AMENITIES.map((amenity, index) => (
              <li key={index} className="flex items-center gap-3">
                {amenity.icon}
                <span>{amenity.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
     
      <BookingSection price={property.price}/>

      </div>
      {property.id && <ReviewSection propertyId={property.id}/>}
    </div>
  );
};

export default PropertyDetail;
