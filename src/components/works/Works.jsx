import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      img:
        "./img/1.jpg",
    },
    {
      id: "2",
      img:
        "./img/2.jpg",
    },
    {
      id: "3",
      img:
        "./img/3.jpg",
    },
    {
      id: "4",
      img:
        "./img/4.jpg",
    },
    {
      id: "5",
      img:
        "./img/5.jpg",
    },
    {
      id: "6",
      img:
        "./img/6.jpg",
    },
    {
      id: "7",
      img:
        "./img/7.jpg",
    },
    {
      id: "8",
      img:
        "./img/8.jpg",
    },
    {
      id: "9",
      img:
        "./img/9.jpg",
    },
    {
      id: "10",
      img:
        "./img/10.jpg",
    },
    {
      id: "11",
      img:
        "./img/11.jpg",
    },
    {
      id: "12",
      img:
        "./img/12.jpg",
    },
    {
      id: "13",
      img:
        "./img/13.jpg",
    },
    {
      id: "14",
      img:
        "./img/14.jpg",
    },
    {
      id: "15",
      img:
        "./img/15.jpg",
    },
    {
      id: "16",
      img:
        "./img/16.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
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
