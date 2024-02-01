import { useState } from "react";
import { useLocation } from "react-router-dom";

interface IImgSliderProps {
  imgUrls: string[];
}

const ImgSlider = ({ imgUrls }: IImgSliderProps) => {
  const location = useLocation();
  const imageHalfPath = window.location.href.replace(location.pathname, "");
  const [currentImg, setCurrentImg] = useState(`${imageHalfPath}/${imgUrls[0]}`)

  const handleImgClick = (path: string) => {
    setCurrentImg(`${imageHalfPath}/${path}`)
  }

  return (
    <div className="grid grid-cols-imgSlider gap-x-3">
      <div className="flex flex-col gap-1">
        {imgUrls.map((img, i) => {
          if (i > 2) return;
          return <img key={img + i} src={`${imageHalfPath}/${img}`} alt="" className="w-full hover:outline" loading="lazy" onClick={() => handleImgClick(img)} />;
        })}
      </div>
      <div>
        {currentImg.length > 0 && (
          <img key={`${currentImg}${currentImg}`} src={`${currentImg}`} alt="" className="w-full" loading="lazy" />
        )}
      </div>
    </div>
  );
};

export default ImgSlider;
