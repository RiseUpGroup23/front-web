import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { MdOutlineMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { RiContactsBookUploadLine } from "react-icons/ri";
import { MdGroups } from "react-icons/md";

import './styles.css';

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isFormulario = location.pathname === "/enviar-correo";

  const [menuVisible, setMenuVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-zinc-950 flex justify-between pr-5">
      <Link to="/">
        <img
          src="LogoRiseUp/Logo.png"
          className="md:aspect-[3] object-contain md:w-[200px] w-[100px] mt-1 cursor-pointer"
        />
      </Link>

      <div className="flex items-center md:hidden">
        <button
          id="menu-toggle"
          className="text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuVisible ? "" : <MdOutlineMenu />}
        </button>
      </div>

      <div className={`md:flex md:items-center gap-10 ${menuVisible ? 'md:flex fixed inset-y-0 right-0 bg-black bg-opacity-60 z-50 text-right' : 'hidden'}`}>
        {isSmallScreen && (
          <button
            className="text-red-700 text-3xl cursor-pointer justify-center flex mt-2"
            onClick={toggleMenu}
          >
            <IoIosCloseCircleOutline />
          </button>
        )}

        <div className={`md:flex md:items-end md:gap-5 md:p-0 ${menuVisible ? 'p-5 flex flex-col' : 'hidden'}`}>
          {isHome && (
            <>
              {isSmallScreen ? (
                <a
                  href="#quienesSomos"
                  className="text-white text-2xl"
                >
                  <MdGroups />
                </a>
              ) : (
                <Link
                  to="/enviar-correo"
                  className="btn mr-3"
                >
                  Contacto
                </Link>
              )}

              {isSmallScreen ? (
                <Link
                  to="/enviar-correo"
                  className="text-white text-2xl mt-3"
                >
                  <RiContactsBookUploadLine />
                </Link>
              ) : (
                <a
                  href="#quienesSomos"
                  className="btn"
                >
                  ¿Quiénes Somos?
                </a>
              )}
            </>
          )}

          {isFormulario && (
            <>
              {isSmallScreen ? (
                <Link
                  to="/"
                  className="text-white text-2xl"
                >
                  <IoHomeOutline />
                </Link>
              ) : (
                <Link
                  to="/"
                  className="btn"
                >
                  Home
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}