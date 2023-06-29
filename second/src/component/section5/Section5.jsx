import React, { useState } from "react";
import style from "./Section5.module.css";
import {AiOutlineShoppingCart} from 'react-icons/ai'
function Section5() {
  const arr = [
    { name: "Esse aliquip do, magni!", btn: "Loream" },
    { name: "Esse aliquip do, magni!", btn: "Loream" },
    { name: "Esse aliquip do, magni!", btn: "Loream" },
  ];

  const [data, setData] = useState(arr);

  return (
    <div className={style.gridContainer}>
      {data.map((ele) => {
        return (
          <div className={style.grid}>
            <img
              src="https://images.pexels.com/photos/276374/pexels-photo-276374.jpeg?cs=srgb&dl=pexels-pixabay-276374.jpg&fm=jpg"
              alt=""
            />
            <div className={style.txtDiv}>
              <h4>{ele.name}</h4>
              <button>
                <AiOutlineShoppingCart style={{marginRight:"5px"}} />
                {ele.btn}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section5;
