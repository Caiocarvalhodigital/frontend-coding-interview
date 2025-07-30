import { PhotosI } from "@/interfaces";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    if (!process.env.PEXELS_API_KEY) {
      throw new Error("Pexels API key is missing");
    }

    const photosResponse = await fetch(
      "https://api.pexels.com/v1/search?query=nature&per_page=10",
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY,
        },
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!photosResponse.ok) {
      throw new Error(`Pexels API error: ${photosResponse.status}`);
    }

    const data = await photosResponse.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching photos:", error);
    return NextResponse.json(
      { message: "Failed to fetch photos" },
      { status: 500 }
    );
  }
};
