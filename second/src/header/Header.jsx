import React, { useState } from "react";
import style from "./Header.module.css";
import ListItem from "../component/listItem/ListItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import ListItemDrop from "../component/listItemsDrop/listItemDrop";

function Header() {
  const [showDetails, setShowDetails] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={open && style.active}>
      <div className={style.header}>
        <div className={style.logoContainer}>
          <img src="../../public/logo.jpg" alt="Logo" />
        </div>
        <ul className={style.list}>
          <li onClick={handleClick}>Ipsum</li>
          <li onClick={handleClick}>Ipsum</li>
          <li onClick={handleClick}>Ipsum</li>
          <li onClick={handleClick}>Ipsum</li>
        </ul>
        <div className={style.DropDownContainer}>
          {open && (
            <>
              <ListItemDrop />
              <ListItemDrop />
              <ListItemDrop />
              <ListItemDrop />
              <ListItemDrop />
            </>
          )}
        </div>

        <div className={style.icons}>
          <GiHamburgerMenu className={style.openMenu} onClick={handleOpen} />
          <GrClose className={style.closeMenu} onClick={handleOpen} />
        </div>
      </div>
      <div className={style.listDrop}> {showDetails && <ListItem />}</div>
    </div>
  );
}

export default Header;
