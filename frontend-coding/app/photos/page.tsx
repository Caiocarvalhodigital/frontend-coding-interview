"use client";

import DefaultPageStructure from "@/components/defaultPageStructure";
import PageTitle from "@/components/pageTitle";
import PhotosDisplay from "@/components/photosDisplay";
import Image from "next/image";

export default function PhotosPage() {
  return (
    <DefaultPageStructure>
      <div className="grow w-[100%] max-w-[31.25rem] flex flex-col gap-[2.5rem]">
        <div className="w-[100%] flex flex-col gap-[1.5rem]">
          <Image src="/logo.svg" width={75} height={75} alt="Logo" />

          <PageTitle text="All photos" />
        </div>

        <PhotosDisplay />
      </div>
    </DefaultPageStructure>
  );
}
