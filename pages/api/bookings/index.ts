import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      cardNumber,
      expirationDate,
      cvv,
      billingAddress,
      city,
      state,
      zipCode,
      country,
      propertyId,
    } = req.body;

    if (!firstName || !lastName || !email || !phoneNumber || !cardNumber || !expirationDate || !cvv || !billingAddress) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Mock external API call (replace with actual database logic)
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      cardNumber,
      expirationDate,
      cvv,
      billingAddress,
      city,
      state,
      zipCode,
      country,
    };

    res.status(200).json({ message: "Booking successful", data: data });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
