import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { PLACEHOLDER_IMAGE, PROPERTYLISTINGSAMPLE } from "../constants";
import HeroSection from "@/components/property/HeroSection";
import FilterSection from "@/components/property/FilterSection";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties`);
        if (response.status === 200) {
          setProperties(response.data);
        } else {
          throw new Error("Error fetching properties");
        }
      } catch (error) {
        console.error("Error fetching properties", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!properties) {
    return <p>Property not found</p>;
  }
  return (
    <div className="p-6 flex flex-col gap-2 items-center justify-between">
      <HeroSection />
      <FilterSection />

      <h1 className="text-3xl font-bold mb-4">ALX Listing App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {properties.map((property) => (
          <Card key={property.name} property={property} />
        ))}
      </div>
      <div className="mt-4">
        <Button
          label="View More Listings"
          onClick={() => alert("Coming Soon!")}
        />
      </div>
    </div>
  );
};

export default Home;
