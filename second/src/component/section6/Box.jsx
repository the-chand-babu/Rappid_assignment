import React from "react";
import style from "./Box.module.css";
function Box({text}) {
  return (
    <div className={style.container}>
     
        {
            text ?
        <h5>{text}</h5>:<h5 className={style.blankSpace}>h</h5>

        }
   
      <p>Ipsum Lorem</p>
      <p>Ipsum Lorem</p>
      <p>Ipsum Lorem</p>
      <p>Ipsum Lorem</p>
      <p>Ipsum Lorem</p>
    </div>
  );
}

export default Box;
