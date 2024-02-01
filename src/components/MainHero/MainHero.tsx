const MainHero = () => {
  return (
    <>
      <div className="relative p-[30px] flex flex-col w-full h-screen">
        <img
          src="src/assets/images/hero-main.jpg"
          alt=""
          className="absolute inset-0 w-full h-screen object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 uppercase text-center text-xl">
          <h1>new collection</h1>
          <h1 className="flex items-center justify-center gap-[5px] sm:flex-row flex-col">
            все, что тебе
            <span className="flex items-center gap-1">нужно <span className="block w-[39px] h-[1px] border border-black"></span> здесь</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default MainHero;
