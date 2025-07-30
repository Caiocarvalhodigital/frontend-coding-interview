"use client";

import { PhotosI } from "@/interfaces";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const LikePhotoStar = ({ photo }: { photo: PhotosI }) => {
  const [isPhotoLiked, setIsPhotoLiked] = useState(false);
  const stringId = photo.id.toString();

  const handleToggleLike = () => {
    const stored = localStorage.getItem("likedPhotos");
    const likedIds: string[] = stored ? JSON.parse(stored) : [];

    let updated: string[];

    if (likedIds.includes(stringId)) {
      updated = likedIds.filter((id) => id !== stringId);
      setIsPhotoLiked(false);
    } else {
      updated = [...likedIds, stringId];
      setIsPhotoLiked(true);
    }

    localStorage.setItem("likedPhotos", JSON.stringify(updated));
  };

  useEffect(() => {
    const stored = localStorage.getItem("likedPhotos");
    const likedIds: string[] = stored ? JSON.parse(stored) : [];
    setIsPhotoLiked(likedIds.includes(stringId));
  }, [stringId]);

  return (
    <div
      className="flex justify-start cursor-pointer hover:brightness-110"
      onClick={() => handleToggleLike()}
    >
      {isPhotoLiked ? (
        <FaStar className="text-[1.2rem] text-yellow" />
      ) : (
        <FaRegStar className="text-[1.2rem] text-gray" />
      )}
    </div>
  );
};

export default LikePhotoStar;
