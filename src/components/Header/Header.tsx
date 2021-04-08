import React, { useState } from "react";
import { ReactComponent as PokemonLogoSvg } from "./assets/Logo.svg";

import HamburgerButton from "../HamburgerButton/Index";

import s from "./Header.module.scss";
import SideMenu from "../SideMenu";
import GeneralMenu from "../GeneralMenu";
import useMediaWidth from "../../hook/getMedia";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isPhoneWidth = useMediaWidth();

  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={s.root}>
        <div className={s.logo}>
          <PokemonLogoSvg />
        </div>

        <div className={s.nav}>
          {isPhoneWidth ? (
            <HamburgerButton
              isMenuOpen={isMenuOpen}
              handleClick={handleClick}
            />
          ) : (
            <GeneralMenu />
          )}
        </div>
      </header>
      {isMenuOpen && (
        <SideMenu
          isMenuOpen={isMenuOpen}
          handleClick={handleClick}
          isPhoneWidth={isPhoneWidth}
        />
      )}
    </>
  );
};

export default React.memo(Header);
