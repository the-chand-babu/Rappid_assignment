import React, { useState } from "react";
import style from "./Section4.module.css";
import { BsLink45Deg } from "react-icons/bs";

function Section4() {
  const arr = [
    {
      image:
        "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      name: "Adipisicing unde vel so  dolore,",
      heading: "consequatur.",
      btn: "Ipsum Loream",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      name: "Adipisicing unde vel so  dolore,",
      heading: "consequatur.",
      btn: "Ipsum Loream",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      name: "Adipisicing unde vel so  dolore,",
      heading: "consequatur.",
      btn: "Ipsum Loream",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      name: "Adipisicing unde vel so  dolore,",
      heading: "consequatur.",
      btn: "Ipsum Loream",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      name: "Adipisicing unde vel so  dolore,",
      heading: "consequatur.",
      btn: "Ipsum Loream",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      name: "Adipisicing unde vel so  dolore,",
      heading: "consequatur.",
      btn: "Ipsum Loream",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      name: "Adipisicing unde vel so  dolore,",
      heading: "consequatur.",
      btn: "Ipsum Loream",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      name: "Adipisicing unde vel so  dolore,",
      heading: "consequatur.",
      btn: "Ipsum Loream",
    },
  ];

  const [data, setData] = useState(arr);

  return (
    <div>
      <h3>Officia ut</h3>
      <div className={style.gridContainer}>
        {data.map((ele) => {
          return (
            <div>
              <img src={ele.image} alt="" />
              <p className={style.para1}>{ele.name}</p>
              <p>{ele.heading}</p>
              <button>
                <BsLink45Deg />
                {ele.btn}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section4;
