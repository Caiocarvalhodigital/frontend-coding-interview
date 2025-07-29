"use client";

const PageTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="font-[700] text-[1.25rem] leading-[1.75rem] text-black">
      {text}
    </h1>
  );
};

export default PageTitle;
