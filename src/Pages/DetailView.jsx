import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/detailView.css";
import img from "../assets/img/dc.png";
import { RestaurantReducerContext } from "../context/RestaurantReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function DetailView() {
  const { id } = useParams();
  console.log(id);
  const { state } = useContext(RestaurantReducerContext);
  console.log(state.restaurants);
  return (
    <main>
      <div className="container">
        <div className="detailView">
          {state.restaurants
            .filter((el) => el.id === id)
            .map((el) => {
               const ratingValue = el.rating;
                return (
                    <section key={el.id}>
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <img
                          src={el.image}
                          className="img-fluid mt-5"
                          alt="Responsive image"
                          style={{
                            height: "450px",
                            width: "925px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-9">
                        <div className="d-flex mb-3">
                          <div className="p-2 px-5">
                            <span className="badge bg-primary">{el.category}</span>
                          </div>
                          <div className="ms-auto p-2">
                          {[...Array(5)].map((_, index) => {
                              return (
                                <FontAwesomeIcon
                                  key={index}
                                  icon={index < ratingValue ? faStar : ['far', 'star']}
                                  style={{ color: index < ratingValue ? '#ffc107' : '#ccc' }}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-9">
                        <div className="judul text-center">
                          <h3>{el.name}</h3>
                        </div>
                        <div className="desc mb-5">
                          {/* <p>{el.description}</p> */}
                          {/* <div
                      className="card-text"
                      dangerouslySetInnerHTML={{ __html: el.description }}
                    ></div> */}
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Minus praesentium explicabo reiciendis iure voluptatibus
                            quo ipsam, molestias mollitia tempore obcaecati quos
                            nihil officia magnam excepturi perspiciatis accusamus
                            esse amet eveniet! Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Voluptas modi, alias cum
                            fugit facere perferendis saepe non magnam, nihil
                            exercitationem ipsum, maiores praesentium molestias!
                            Quisquam facere iure eius ab asperiores? Lorem ipsum
                            dolor sit amet consectetur, adipisicing elit. Est
                            maiores, architecto numquam accusamus, suscipit quisquam
                            rem eaque perspiciatis quis ad possimus itaque! Cumque
                            soluta placeat ipsam voluptatum deleniti optio
                            recusandae!
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                )
            })}
        </div>
      </div>
    </main>
  );
}

export default DetailView;
