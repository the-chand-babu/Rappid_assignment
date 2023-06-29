import React from "react";
import style from "./Section2.module.css";
import Button from "./Button";
import { FiMail } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
function Section2() {
  return (
    <div className={style.container}>
      <p>Minim modi yet omnis nor quia so minima.</p>
      <div>
        <Button icon={FiMail} />
        <Button icon={BsLink45Deg} />
        <Button icon={CiLocationOn} />
      </div>
    </div>
  );
}

export default Section2;
