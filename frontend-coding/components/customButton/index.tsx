"use client";

const CustomButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <button
      className="rounded-[0.5rem] text-[1rem] leading-[1.5rem] font-[700] flex justify-center items-center bg-blue text-white min-h-[2.75rem] cursor-pointer hover:brightness-110"
      type="submit"
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
