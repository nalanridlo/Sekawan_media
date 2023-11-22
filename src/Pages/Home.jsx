import React, { useEffect } from "react";
import "../assets/css/Home.css";
import img from "../assets/img/dc.png";
import Card from "../Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { RestaurantReducerContext } from "../context/RestaurantReducer";
import { useNavigate } from "react-router-dom";

function Home() {
  const { state } = useContext(RestaurantReducerContext);
  const navigation = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openNow, setOpenNow] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [visibilityItems,setVisibilityItems] = useState(8);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleOpenNow = () => {
    setOpenNow(!openNow);
  };

  const handlePrice = (price) => {
    setSelectedPrice(price);
  };

  const handleClearAll = () => {
    setSelectedCategory("All");
    setOpenNow(false);
    setSelectedPrice("All");
    setVisibilityItems(8);
  };

  const handleLoadMore = () => {
    setVisibilityItems(visibilityItems + 4);
  };

  const filteredRestaurant = state.restaurants.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }
    if (selectedPrice !== "All" && item.price !== selectedPrice) {
      return false;
    }
    if (openNow && item.status !== "open") {
      return false;
    }
    return true;
  }).slice (0,visibilityItems);

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Restaurants</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            assumenda veniam quae debitis culpa voluptates qui porro mollitia
            consectetur, facilis impedit aliquid dolorem sint nam quos earum
            repudiandae cupiditate molestiae?
          </p>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="filter">
          <div class="row">
            <div class="col ">
              <span>Filter By: </span>
              <input
                type="radio"
                name="openNow"
                id="openNow"
                checked={openNow}
                onChange={handleOpenNow}
              />
              <label htmlFor="openNow">Open Now</label>
              <div class="dropdown px-5">
                <select
                  value={selectedPrice}
                  onChange={(e) => handlePrice(e.target.value)}
                >
                  <option value="All">Price</option>
                  <option value="1">$1</option>
                  <option value="2">$2</option>
                  <option value="3">$3</option>
                  <option value="4">$4</option>
                  <option value="5">$5</option>
                </select>
              </div>
              <div class="dropdown">
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategory(e.target.value)}
                >
                  <option onClick={() => handleCategory("All")}>
                    Categories
                  </option>
                  <option onClick={() => handleCategory("THAI")}>THAI</option>
                  <option onClick={() => handleCategory("SEAFOOD")}>
                    SEAFOOD
                  </option>
                  <option onClick={() => handleCategory("JAPANESE")}>
                    JAPANESE
                  </option>
                  <option onClick={() => handleCategory("ITALIAN")}>
                    ITALIAN
                  </option>
                  <option onClick={() => handleCategory("AMERICAN")}>
                    AMERICAN
                  </option>
                  <option onClick={() => handleCategory("MEXICAN")}>
                    MEXICAN
                  </option>
                  <option onClick={() => handleCategory("STEAKHOUSES")}>
                    STEAKHOUSES
                  </option>
                </select>
              </div>
            </div>
            <div class="col col-lg-2">
              <button type="button" class="btn btn-secondary" onClick={handleClearAll}>
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <h1>All Restaurants</h1>
        <div className="row">
          {filteredRestaurant.map((item) => {
            const ratingValue = item.rating;
            return (
              <div className="col-md-3" key={item.id}>
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
                              icon={
                                index < ratingValue ? faStar : ["far", "star"]
                              }
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
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <button
            style={{width: "300px"}}
              type="button"
              className="btn btn-primary mb-5"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>

      </div>
      </div>
    </> 
  );
}

export default Home;
