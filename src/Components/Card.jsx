import React from "react";
import "../assets/css/card.css";
import img from "../assets/img/dc.png";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigation = useNavigate();
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="card-tittle">
          <span className="">asd</span>
        </div>
        <div className="card-rating">
          <span>2</span>
        </div>
        <div className="card-information">
          <div>

          <span className="">1</span>
          <span className="">2</span>
          </div>
          <span>3</span>
        </div>
      </div>
      <a className="btn btn-outline-primary pb-2"
      onClick={() => {
        navigation(`/detail/${item.id}`);
      }
      }
      >Baca lebih lanjut</a>
    </div>
  );
}

export default Card;
