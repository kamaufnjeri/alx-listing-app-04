import type { NextApiRequest, NextApiResponse } from "next";
import { ReviewProps } from "@/interfaces";
import { PROPERTYREVIEWS } from "@/constants";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReviewProps[] | { message: string }>
) {
  if (req.method === "GET") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "No property ID provided" });
    }

    const reviews = PROPERTYREVIEWS.filter((review) => review.propertyId === Number(id));

    if (reviews.length > 0) {
      return res.status(200).json(reviews);
    } else {
      return res.status(404).json({ message: "No reviews found for this property" });
    }
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
