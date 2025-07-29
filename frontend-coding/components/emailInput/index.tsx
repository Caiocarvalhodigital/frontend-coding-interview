"use client";

const EmailInput = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  label,
}: {
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: string) => void;
  label: string;
}) => {
  return (
    <div className=" w-[100%] flex flex-col gap-[0.65rem]">
      <label
        htmlFor={id}
        className="font-[700] text-[0.875rem] leading-[1.375rem] text-black"
      >
        {label}
      </label>

      <input
        className="w-[100%] bg-white rounded-[0.5rem] h-[2.75rem] text-black placeholder:text-gray text-[1rem] leading-[1.5rem] border-[1px] border-gray p-[0.625rem] focus:outline-blue focus:outline-[1px] hover:outline-blue hover:outline-[1px]"
        id={id}
        name={name}
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default EmailInput;
