import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "./Lorem.module.css";
function Lorem() {
  return (
    <div className={style.loremContainer}>
      <h5>Quia so minima</h5>
      <button className={style.btndata}>
        <AiOutlineShoppingCart /> Lorem
      </button>
      <button className={style.btndata}>
        <AiOutlineShoppingCart /> Lorem
      </button>{" "}
      <button className={style.btndata}>
        <AiOutlineShoppingCart /> Lorem
      </button>{" "}
      <button className={style.btndata}>
        <AiOutlineShoppingCart /> Lorem
      </button>{" "}
      <button className={style.btndata}>
        <AiOutlineShoppingCart /> Lorem
      </button>
    </div>
  );
}

export default Lorem;
