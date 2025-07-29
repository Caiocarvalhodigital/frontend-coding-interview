"use client";

const CustomButton = ({
  buttonText,
  onClick,
  type,
}: {
  buttonText: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-[0.5rem] text-[1rem] leading-[1.5rem] font-[700] flex justify-center items-center bg-blue text-white min-h-[2.75rem] cursor-pointer hover:brightness-125"
      type={type}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
