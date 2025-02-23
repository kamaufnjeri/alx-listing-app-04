import type { NextApiRequest, NextApiResponse } from "next";
import { PropertyProps } from "@/interfaces";
import { PROPERTYLISTINGSAMPLE } from "@/constants";



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyProps[] | PropertyProps | { message: string }>
) {
  if (req.method === "GET") {
    
    return res.status(200).json(PROPERTYLISTINGSAMPLE);
  }
  res.status(405).json({ message: "Method Not Allowed" });
}
