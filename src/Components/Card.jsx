import React, { useContext } from "react";
import "../assets/css/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


function Card({ item, navigation }) {
  const ratingValue = item.rating;

  return (
    <div className="card mb-5" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-tittle">
            <h5 className="">{item.name}</h5>
          </div>
          <div className="card-rating">
            <div className="rating">
              {[...Array(5)].map((_, index) => {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={index < ratingValue ? faStar : ["far", "star"]}
                    style={{
                      color: index < ratingValue ? "#ffc107" : "#ccc",
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="card-information">
            <div>
              <span className="">{item.category} - </span>
              <span className="">${item.price}</span>
            </div>
            <span>{item.status}</span>
          </div>
        </div>
        <a
          className="btn btn-outline-primary pb-2"
          onClick={() => {
            navigation(`/detail/${item.id}`);
          }}
        >
          Baca lebih lanjut
        </a>
      </div>
  );
}

export default Card;
