import type { NextApiRequest, NextApiResponse } from "next";
import { PropertyProps } from "@/interfaces";
import { PROPERTYLISTINGSAMPLE } from "@/constants";



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyProps[] | PropertyProps | { message: string }>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    
    if (id) {
      const property = PROPERTYLISTINGSAMPLE.find((p) => p.id === Number(id));
      if (property) {
        return res.status(200).json(property);
      } else {
        return res.status(404).json({ message: "Property not found" });
      }
    }
    return res.status(404).json({ message: "No id provided" });
  }
  res.status(405).json({ message: "Method Not Allowed" });
}
