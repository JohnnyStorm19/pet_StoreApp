import { Link, useNavigate } from "react-router-dom";

interface ICtALargeProps {
  image: string;
  title: string;
  navigateLink: string;
}

const CtAImage = ({ image, title, navigateLink }: ICtALargeProps) => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer uppercase" onClick={() => navigate(navigateLink)}>
      <div>
        <img src={image} alt="" loading="lazy" />
      </div>
      <h3>{title}</h3>
      <Link to={navigateLink} className="opacity-50">Перейти в раздел</Link>
    </div>
  );
};

export default CtAImage;
