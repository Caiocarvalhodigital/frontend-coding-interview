"use client";

import DefaultPageStructure from "@/components/defaultPageStructure";
import PageTitle from "@/components/pageTitle";
import PhotosDisplay from "@/components/photosDisplay";
import { useAuthentication } from "@/contexts/authContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaCircleNotch } from "react-icons/fa6";

const PhotosPage = () => {
  const { isAuthenticated, hasAuthenticationLoaded } = useAuthentication();
  const router = useRouter();

  useEffect(() => {
    if (hasAuthenticationLoaded && !isAuthenticated) {
      router.push("/");
    }
  }, [hasAuthenticationLoaded, isAuthenticated]);

  if (!hasAuthenticationLoaded) {
    return (
      <DefaultPageStructure>
        <div className="grow w-[100%] flex flex-col justify-center items-center">
          <FaCircleNotch className="text-[2rem] text-blue animate-spin" />
        </div>
      </DefaultPageStructure>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <DefaultPageStructure>
      <div className="grow w-[100%] max-w-[31.25rem] flex flex-col gap-[2.5rem]">
        <div className="w-[100%] flex flex-col gap-[1.5rem]">
          <Image src="/logo.svg" width={75} height={75} alt="App Logo" />

          <PageTitle text="All photos" />
        </div>

        <PhotosDisplay />
      </div>
    </DefaultPageStructure>
  );
};

export default PhotosPage;
