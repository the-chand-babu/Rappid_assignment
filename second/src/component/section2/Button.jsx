import React from "react";
import style from "./Button.module.css";

function Button(props) {
  console.log(props);
  return (
  
    <button className={style.button}>
      <props.icon style={{ marginRight: "5px" }} className={style.icons}  />
      Ipsum loream
    </button>
  
  );
}

export default Button;
