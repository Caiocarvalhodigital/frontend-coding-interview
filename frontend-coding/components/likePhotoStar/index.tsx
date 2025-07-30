"use client";

import { PhotosI } from "@/interfaces";
import { memo, useCallback, useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const LikePhotoStar = memo(({ photo }: { photo: PhotosI }) => {
  const [isPhotoLiked, setIsPhotoLiked] = useState(false);
  const stringId = photo.id.toString();

  const checkIfPhotoIsLiked = useCallback(() => {
    try {
      const stored = localStorage.getItem("likedPhotos");
      if (stored) {
        const likedIds: string[] = JSON.parse(stored);
        return likedIds.includes(stringId);
      }
      return false;
    } catch (error) {
      console.error("Error checking liked photos:", error);
      return false;
    }
  }, [stringId]);

  const handleToggleLike = useCallback(() => {
    try {
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
    } catch (error) {
      console.error("Error updating liked photos:", error);
    }
  }, [stringId]);

  useEffect(() => {
    setIsPhotoLiked(checkIfPhotoIsLiked());
  }, [checkIfPhotoIsLiked]);

  return (
    <button
      className="flex justify-start cursor-pointer hover:brightness-110"
      onClick={() => handleToggleLike()}
      aria-label={isPhotoLiked ? "Unlike photo" : "Like photo"}
      aria-pressed={isPhotoLiked}
    >
      {isPhotoLiked ? (
        <FaStar className="text-[1.2rem] text-yellow" />
      ) : (
        <FaRegStar className="text-[1.2rem] text-gray" />
      )}
    </button>
  );
});

export default LikePhotoStar;
