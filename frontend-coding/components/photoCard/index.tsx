"use client";

import { PhotosI } from "@/interfaces";
import Image from "next/image";
import LikePhotoStar from "@/components/likePhotoStar";
import { memo } from "react";

const PhotoCard = memo(({ photo }: { photo: PhotosI }) => {
  return (
    <div className="w-[100%] flex gap-[0.75rem]">
      <div className="w-[100%] flex justify-between gap-[0.75rem]">
        <div className="flex justify-between items-start gap-[0.75rem]">
          <LikePhotoStar photo={photo} />

          <div className="relative w-[4.6875rem] min-w-[4.6875rem] h-[4.6875rem] min-h-[4.6875rem] rounded-[0.5rem] overflow-hidden">
            <Image
              src={photo.src.small}
              alt={photo.alt}
              fill
              loading="lazy"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          <div className="flex flex-col gap-[0.375rem]">
            <p className="font-[700] text-[0.875rem] leading-[1.375rem]">
              {photo.photographer || "Unknown Photographer"}
            </p>

            <p className="text-[0.875rem] leading-[1.375rem]">
              {photo.alt || "No description available"}
            </p>

            <div className="flex items-center gap-[0.5rem]">
              <p
                className="text-[0.875rem] leading-[1.375rem]"
                style={{
                  color: photo.avg_color ?? "#111827",
                }}
              >
                {photo.avg_color ?? "#111827"}
              </p>

              <div
                className="min-h-[0.75rem] min-w-[0.75rem]"
                style={{ backgroundColor: photo.avg_color ?? "#111827" }}
                aria-label={`Average color`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        <a
          className="min-w-[4.2rem] flex items-center gap-[0.25rem] hover:border-b-[1px] hover:border-b-blue"
          href={photo.photographer_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/links.svg" width={12} height={12} alt="Link icon" />

          <p className="text-[0.875rem] leading-[1.375rem] text-blue">
            Portfolio
          </p>
        </a>
      </div>
    </div>
  );
});

export default PhotoCard;
