const DefaultPageStructure = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[100%] min-h-[100vh] flex justify-center items-center p-[1rem]">
      <div className="w-[100%] max-w-[80rem]">{children}</div>
    </div>
  );
};

export default DefaultPageStructure;
