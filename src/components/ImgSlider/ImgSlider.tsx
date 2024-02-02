import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface IImgSliderProps {
  imgUrls: string[];
}

const ImgSlider = ({ imgUrls }: IImgSliderProps) => {
  const location = useLocation();
  const imageHalfPath = window.location.href.replace(location.pathname, "");
  const [counter, setCounter] = useState(0);
  const [currentImg, setCurrentImg] = useState(
    `${imageHalfPath}/${imgUrls[counter]}`
  );

  const handleImgClick = (path: string) => {
    setCurrentImg(`${imageHalfPath}/${path}`);
  };

  const incrementCounter = () => {
    if (counter < imgUrls.length - 1) {
      setCounter(prev => prev += 1);
    } else {
      setCounter(0);
    }
  }
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(prev => prev -= 1);
    } else {
      setCounter(imgUrls.length - 1);
    }
  }

  useEffect(() => {
    setCurrentImg(`${imageHalfPath}/${imgUrls[counter]}`)
  }, [imageHalfPath, imgUrls, counter])

  return (
    <div className="grid grid-cols-imgSlider gap-x-3">
      <div className="flex flex-col gap-1">
        {imgUrls.map((img, i) => {
          if (i > 2) return;
          return (
            <img
              key={img + i}
              src={`${imageHalfPath}/${img}`}
              alt=""
              className={`w-full hover:outline transition-all duration-75 ${currentImg === `${imageHalfPath}/${img}` ? 'outline': ''}`}
              loading="lazy"
              onClick={() => handleImgClick(img)}
            />
          );
        })}
      </div>
      <div>
        {currentImg.length > 0 && (
          <div className="relative">
            <img
              key={`${currentImg}${currentImg}`}
              src={`${currentImg}`}
              alt=""
              className="w-full"
              loading="lazy"
            />
            <div className="absolute top-1/2 -translate-y-1/2 text-white cursor-pointer active:scale-95" onClick={decrementCounter}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 select-none"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 text-white cursor-pointer active:scale-95" onClick={incrementCounter}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 select-none"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImgSlider;
