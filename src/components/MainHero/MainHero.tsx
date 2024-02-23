import { Carousel } from "@material-tailwind/react";

const MainHero = () => {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      prevArrow={({ handlePrev }) => (
        <div onClick={handlePrev} className="hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
      )}
      nextArrow={({ handleNext }) => (
        <div onClick={handleNext} className="hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="hidden">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative p-[30px] flex flex-col w-full h-screen">
        <img
          src="images/hero-main.jpg"
          alt=""
          className="absolute inset-0 w-full h-screen object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 uppercase text-center text-xl">
          <h1>new collection</h1>
          <h1 className="flex items-center justify-center gap-[5px] sm:flex-row flex-col">
            все, что тебе
            <span className="flex items-center gap-1">
              нужно{" "}
              <span className="block w-[39px] h-[1px] border border-black"></span>{" "}
              здесь
            </span>
          </h1>
        </div>
      </div>
      <div className="relative p-[30px] flex flex-col w-full h-screen">
        <img
          src="images/hero-main_2.jpg"
          alt=""
          className="absolute inset-0 w-full h-screen object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 uppercase text-center text-xl text-white">
          <h1>new collection</h1>
          <h1 className="flex items-center justify-center gap-[5px] sm:flex-row flex-col">
            все, что тебе
            <span className="flex items-center gap-1">
              нужно{" "}
              <span className="block w-[39px] h-[1px] border border-white"></span>{" "}
              здесь
            </span>
          </h1>
        </div>
      </div>
    </Carousel>
  );
};

export default MainHero;
