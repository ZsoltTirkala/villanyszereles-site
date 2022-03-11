import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      img:
        "./img/1.png",
    },
    {
      id: "2",
      img:
        "./img/2.png",
    },
    {
      id: "3",
      img:
        "./img/3.png",
    },
    {
      id: "4",
      img:
        "./img/4.png",
    },
    {
      id: "5",
      img:
        "./img/5.png",
    },
    {
      id: "6",
      img:
        "./img/6.png",
    },
    {
      id: "7",
      img:
        "./img/7.png",
    },
    {
      id: "8",
      img:
        "./img/8.png",
    },
    {
      id: "9",
      img:
        "./img/9.png",
    },
    {
      id: "10",
      img:
        "./img/10.png",
    },
    {
      id: "11",
      img:
        "./img/11.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 10)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <h1>Munkáim</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <img src={d.img} alt="" id="work-image"/>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
