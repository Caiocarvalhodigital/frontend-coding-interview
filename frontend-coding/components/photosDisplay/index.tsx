"use client";

import { PhotosI } from "@/interfaces";
import { useEffect, useState } from "react";
import { FaCircleNotch } from "react-icons/fa6";
import PhotoCard from "@/components/photoCard";

const PhotosDisplay = () => {
  const [photos, setPhotos] = useState<PhotosI[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photosResponse = await fetch("/api/photos");

        if (!photosResponse.ok) {
          const responseError = await photosResponse.json();
          console.error(responseError.message);
          return;
        }

        const data = await photosResponse.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (isLoading) {
    return (
      <div className="w-[100%] flex justify-center">
        <FaCircleNotch className="text-[2rem] text-blue animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-[100%] flex flex-col gap-[0.75rem]">
      {photos.map((item) => (
        <PhotoCard key={item.id} photo={item} />
      ))}
    </div>
  );
};

export default PhotosDisplay;
