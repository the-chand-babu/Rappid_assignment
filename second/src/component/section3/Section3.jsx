import React from "react";
import style from "./Section3.module.css";
import { BsLink45Deg } from "react-icons/bs";

function Section3() {
  return (
    <div className={style.container}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
          alt=""
        />
        <div className={style.buttonDiv}>
          <button>
            {" "}
            <BsLink45Deg className={style.icons} /> Ipsum
          </button>
          <button>
            {" "}
            <BsLink45Deg /> Ipsum
          </button>
          <button>
            {" "}
            <BsLink45Deg /> Ipsum
          </button>
        </div>
      </div>
      <div className={style.container2}>
        <div className={style.textDiv}>
          <div className={style.textContainer}>
            <span>Numuquam.</span>
            <p>Esse aliquib do, magni.</p>
          </div>

          <h1 className={style.h1tag}>Minima ad for vitae sit</h1>
        </div>

        <div className={style.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className={style.lowerContainer}>
          <button className={style.button}>
            <BsLink45Deg /> Ipsum Loream
          </button>
          <div>
            <p>Adipisicing unde vel so dolore,</p>
            <p>consequatur.</p>
          </div>
          <a href="">Ipsum Loream</a>
        </div>
      </div>
    </div>
  );
}

export default Section3;
