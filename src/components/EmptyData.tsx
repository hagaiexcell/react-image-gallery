const EmptyData = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <img
        className="max-w-32 md:max-w-56"
        src="/src/assets/no-data.png"
        alt=""
      />
      <div className="text-2xl font-bold">No Data Found</div>
    </div>
  );
};

export default EmptyData;
