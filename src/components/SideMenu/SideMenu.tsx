import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface ISideMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const SideMenu = ({ isVisible, onClose }: ISideMenuProps) => {
  const [isCatalogueClicked, setIsCatalogueClicked] = useState(false);
  const location = useLocation();

  const handleCategoriesClick = () => {
    setIsCatalogueClicked(!isCatalogueClicked);
    onClose();
  };

  return (
    <aside
      className={`fixed inset-0 flex flex-col ${
        isVisible ? " translate-x-0" : "-translate-x-full"
      } block gap-5 p-[30px] uppercase z-20 bg-white transition-all duration-300`}
    >
      <div onClick={handleCategoriesClick} className="my-auto">
        <ul className="flex flex-col gap-8">
          <li className="side-menu-li">
            <Link to="/catalogue">Каталог</Link>
          </li>
          {location.pathname === "/" && (
            <>
              <li className="group">
                <a href="#best-sellers">Бестселлерс</a>
                <span className="link-span"></span>
              </li>
              <li className="group">
                <a href="#sale">Сейл</a>
                <span className="link-span"></span>
              </li>
            </>
          )}
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 cursor-pointer fixed top-2 right-0"
        onClick={onClose}
      >
        <path
          fillRule="evenodd"
          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </aside>
  );
};

export default SideMenu;
