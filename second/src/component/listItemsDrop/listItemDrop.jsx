import React, { useState } from "react";
import style from "./listDrop.module.css";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiSolidUpArrow } from "react-icons/bi";
function ListItemDrop() {
  const [open, setOpen] = useState(false);

  const hadleChange = () => {
    setOpen(!open);
  };
  return (
    <div className={open && style.openDropdown}>
      <div className={style.container}>
        <button onClick={hadleChange}>
          IPsum
          {open ? <BiSolidUpArrow /> : <AiOutlineCaretDown />}
        </button>
        <ul className={style.noneDisplay}>
          <p>IpSum</p>
          <a href="">
            <li>Link</li>
          </a>
          <a href="">
            <li>Link</li>
          </a>
          <a href="">
            <li>Link</li>
          </a>
          <a href="">
            <li>Link</li>
          </a>
          <a href="">
            <li>Link</li>
          </a>
        </ul>
        <ul className={style.noneDisplay}>
          <p>IpSum</p>
          <a href="">
            <li>Link</li>
          </a>
          <a href="">
            <li>Link</li>
          </a>
          <a href="">
            <li>Link</li>
          </a>
          <a href="">
            <li>Link</li>
          </a>
          <a href="">
            <li>Link</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default ListItemDrop;
