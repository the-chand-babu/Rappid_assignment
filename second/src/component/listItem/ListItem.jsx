import React from "react";
import style from "./ListItem.module.css";

function ListItem() {
  return (
    <div className={style.listContainer}>
      <ul>
        <p>Ipsum loream</p>
    <a href=""><li>Link</li></a>
    <a href=""><li>Link</li></a>
    <a href=""><li>Link</li></a>
    <a href=""><li>Link</li></a>
    <a href=""><li>Link</li></a>
       
      </ul>
      <ul>
      <p>Ipsum loream</p>

    <a href=""><li>Link</li></a>
    <a href=""><li>Link</li></a>
    <a href=""><li>Link</li></a>
    <a href=""><li>Link</li></a>
    <a href=""><li>Link</li></a>
      
      </ul>
    </div>
  );
}

export default ListItem;
