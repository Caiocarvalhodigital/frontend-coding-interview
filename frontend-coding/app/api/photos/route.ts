import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const photosResponse = await fetch(
      "https://api.pexels.com/v1/search?query=nature&per_page=10",
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY || "",
        },
      }
    );

    const data = await photosResponse.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
