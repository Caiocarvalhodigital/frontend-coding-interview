const DefaultPageStructure = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[100%] min-h-[100vh] p-[1rem] flex justify-center">
      <div className="grow w-[100%] max-w-[80rem] flex justify-center">
        {children}
      </div>
    </div>
  );
};

export default DefaultPageStructure;
