import { useEffect, useRef, useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const Navbar = () => {
  const [isVisibleSideMenu, setIsVisibleSideMenu] = useState(false);
  const [isVisibleNavbar, setIsVisibleNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const cartProductsCount = useAppSelector(state => state.products.cart).length;
  const favouriteProductsCount = useAppSelector(state => state.products.favourites).length

  const timeout = useRef<number | null>(null);
  const [navbarBg, setNavbarBg] = useState(false);

  const handleSideMenuClick = () => {
    setIsVisibleSideMenu(!isVisibleSideMenu);
  };
  const handleSideMenuClose = () => {
    setIsVisibleSideMenu(false);
  }

  useEffect(() => {
    const handleNavbar = () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      if (window.scrollY > lastScrollY) {
        setIsVisibleNavbar(false);
      } else {
        setIsVisibleNavbar(true);
        setNavbarBg(true);
        if (window.scrollY <= 20) {
          setIsVisibleNavbar(true);
          setNavbarBg(false);
        } else {
          timeout.current = setTimeout(() => { 
            setIsVisibleNavbar(false);
            setNavbarBg(false); 
          }, 2000);
        }
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed ${
          isVisibleNavbar ? "block" : "hidden"
        } ${isVisibleSideMenu && "hidden"} z-10 uppercase ${navbarBg ? 'bg-white' : 'bg-transparent'} w-full`}
      >
        <div className="max-[320px]:block hidden my-4 font-neue-bold cursor-pointer text-center">
            <Link to={'/'}>Крем-сода</Link>
        </div>
        <div className={`flex justify-between px-[30px] max-[320px]:pt-0 max-[320px]:pb-4 py-6`}>
          <div className="flex items-center gap-6 sm:gap-12">
            <div
              className="md:hidden w-[31px] h-[10px] border-y-2 border-black cursor-pointer"
              onClick={handleSideMenuClick}
            ></div>
            <div className="max-[320px]:hidden font-neue-bold justify-self-center cursor-pointer ">
              <Link to={'/'}>Крем-сода</Link>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <ul className="flex gap-10 [&>li]:cursor-pointer">
                <li className="group">
                  <Link to="/catalogue" className="">Каталог</Link>
                  <span className="link-span"></span>
                </li>
                {location.pathname === '/' && (
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
          </div>

          <div className="flex sm:gap-6 gap-3">
            <svg
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="navbar-svg-icons"
            >
              <path
                d="M12.2272 2C10.2045 2 8.22714 2.59982 6.54528 3.7236C4.86343 4.84738 3.55258 6.44465 2.7785 8.31343C2.00443 10.1822 1.8019 12.2386 2.19652 14.2224C2.59114 16.2063 3.56518 18.0286 4.99549 19.4589C6.42579 20.8892 8.2481 21.8633 10.232 22.2579C12.2159 22.6525 14.2722 22.45 16.141 21.6759C18.0098 20.9018 19.6071 19.591 20.7308 17.9091C21.8546 16.2273 22.4544 14.25 22.4544 12.2272C22.4543 9.51484 21.3767 6.91361 19.4588 4.99567C17.5408 3.07774 14.9396 2.00017 12.2272 2Z"
                stroke="black"
                strokeWidth="2.08333"
                strokeMiterlimit="10"
              />
              <path
                d="M19.8574 19.8574L27 27"
                stroke="black"
                strokeWidth="2.08333"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            <Link to={'/favourites'} className="relative">
              <svg
                viewBox="0 0 28 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="navbar-svg-icons"
              >
                <path
                  d="M14 3.86245L13.2967 4.53965C13.3879 4.63419 13.4971 4.70938 13.6179 4.76074C13.7388 4.81209 13.8687 4.83856 14 4.83856C14.1313 4.83856 14.2612 4.81209 14.3821 4.76074C14.5029 4.70938 14.6121 4.63419 14.7033 4.53965L14 3.86245ZM10.6478 20.5609C8.67349 19.0046 6.51554 17.4848 4.80298 15.5573C3.12558 13.6664 1.95349 11.4615 1.95349 8.599H0C0 12.071 1.44558 14.7199 3.34307 16.8544C5.2054 18.9512 7.58084 20.6312 9.43795 22.095L10.6478 20.5609ZM1.95349 8.599C1.95349 5.799 3.53581 3.44961 5.69637 2.46114C7.79572 1.50133 10.6166 1.75528 13.2967 4.53965L14.7033 3.18654C11.5256 -0.117461 7.83219 -0.663136 4.88372 0.684771C2.00037 2.00403 0 5.0671 0 8.599H1.95349ZM9.43795 22.095C10.106 22.6211 10.8223 23.1811 11.5477 23.6057C12.2731 24.029 13.1014 24.3741 14 24.3741V22.4206C13.5963 22.4206 13.1222 22.2643 12.5336 21.9192C11.9436 21.5754 11.3328 21.1013 10.6478 20.5609L9.43795 22.095ZM18.562 22.095C20.4192 20.6299 22.7946 18.9525 24.6569 16.8544C26.5544 14.7186 28 12.071 28 8.599H26.0465C26.0465 11.4615 24.8744 13.6664 23.197 15.5573C21.4845 17.4848 19.3265 19.0046 17.3522 20.5609L18.562 22.095ZM28 8.599C28 5.0671 26.0009 2.00403 23.1163 0.684771C20.1678 -0.663136 16.477 -0.117461 13.2967 3.18524L14.7033 4.53965C17.3834 1.75658 20.2043 1.50133 22.3036 2.46114C24.4642 3.44961 26.0465 5.7977 26.0465 8.599H28ZM17.3522 20.5609C16.6672 21.1013 16.0564 21.5754 15.4664 21.9192C14.8778 22.263 14.4037 22.4206 14 22.4206V24.3741C14.8986 24.3741 15.7269 24.029 16.4523 23.6057C17.179 23.1811 17.894 22.6211 18.562 22.095L17.3522 20.5609Z"
                  fill="black"
                />
              </svg>
              <span className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-black text-white text-xs flex justify-center items-center">{favouriteProductsCount}</span>
            </Link>
            <Link to={'/cart'} className="relative">
              <svg
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="navbar-svg-icons"
              >
                <path
                  d="M23.8154 5.95385H18.8538C18.8538 4.37479 18.2266 2.8604 17.11 1.74384C15.9934 0.627278 14.4791 0 12.9 0C11.3209 0 9.80656 0.627278 8.68999 1.74384C7.57343 2.8604 6.94615 4.37479 6.94615 5.95385H1.98462C1.45826 5.95385 0.953468 6.16294 0.58128 6.53513C0.209093 6.90731 0 7.41211 0 7.93846V22.8231C0 23.3494 0.209093 23.8542 0.58128 24.2264C0.953468 24.5986 1.45826 24.8077 1.98462 24.8077H23.8154C24.3417 24.8077 24.8465 24.5986 25.2187 24.2264C25.5909 23.8542 25.8 23.3494 25.8 22.8231V7.93846C25.8 7.41211 25.5909 6.90731 25.2187 6.53513C24.8465 6.16294 24.3417 5.95385 23.8154 5.95385ZM12.9 1.98462C13.9527 1.98462 14.9623 2.4028 15.7067 3.14718C16.451 3.89155 16.8692 4.90114 16.8692 5.95385H8.93077C8.93077 4.90114 9.34895 3.89155 10.0933 3.14718C10.8377 2.4028 11.8473 1.98462 12.9 1.98462ZM23.8154 22.8231H1.98462V7.93846H6.94615V9.92308C6.94615 10.1863 7.0507 10.4387 7.23679 10.6247C7.42289 10.8108 7.67528 10.9154 7.93846 10.9154C8.20164 10.9154 8.45403 10.8108 8.64013 10.6247C8.82622 10.4387 8.93077 10.1863 8.93077 9.92308V7.93846H16.8692V9.92308C16.8692 10.1863 16.9738 10.4387 17.1599 10.6247C17.346 10.8108 17.5984 10.9154 17.8615 10.9154C18.1247 10.9154 18.3771 10.8108 18.5632 10.6247C18.7493 10.4387 18.8538 10.1863 18.8538 9.92308V7.93846H23.8154V22.8231Z"
                  fill="black"
                />
              </svg>
              <span className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-black text-white text-xs flex justify-center items-center">{cartProductsCount}</span>
            </Link>
            <svg
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="navbar-svg-icons"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4634 6.25C17.4634 8.59721 15.5606 10.5 13.2134 10.5C10.8662 10.5 8.96343 8.59721 8.96343 6.25C8.96343 3.90279 10.8662 2 13.2134 2C15.5606 2 17.4634 3.90279 17.4634 6.25ZM19.4634 6.25C19.4634 9.70178 16.6652 12.5 13.2134 12.5C9.76165 12.5 6.96343 9.70178 6.96343 6.25C6.96343 2.79822 9.76165 0 13.2134 0C16.6652 0 19.4634 2.79822 19.4634 6.25ZM20.6381 17.5754C22.129 19.0663 23.1253 20.9596 23.5212 23H13.2134L2.90561 23C3.30153 20.9596 4.29785 19.0663 5.78881 17.5754C7.75794 15.6062 10.4287 14.5 13.2134 14.5C15.9982 14.5 18.6689 15.6062 20.6381 17.5754ZM24.1509 25C25.0139 25 25.7235 24.2977 25.6159 23.4415C25.2716 20.7009 24.0261 18.135 22.0523 16.1612C19.7081 13.817 16.5286 12.5 13.2134 12.5C9.89822 12.5 6.7188 13.817 4.37459 16.1612C2.40078 18.135 1.15523 20.7009 0.810916 23.4415C0.703344 24.2977 1.41298 25 2.27593 25L13.2134 25H24.1509Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </nav>
      <SideMenu isVisible={isVisibleSideMenu} onClose={handleSideMenuClose} />
    </>
  );
};

export default Navbar;
