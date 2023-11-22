// RestaurantReducerProvider.js
import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

export const RestaurantReducerContext = createContext();

const initialState = {
  restaurants: [],
  selectedRestaurant: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "GET_DATA_SUCCESS": {
      return {
        ...state,
        restaurants: action.payload,
      };
    }
    default:
      return state;
  }
}

function successGetRestaurant(data) {
  return {
    type: "GET_DATA_SUCCESS",
    payload: data,
  };
}

function RestaurantReducerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://646198f8185dd9877e3f58cd.mockapi.io/Restaurant");
        const result = response.data;
        dispatch(successGetRestaurant(result));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // useEffect akan dijalankan sekali saat komponen dipasang

  return (
    <RestaurantReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </RestaurantReducerContext.Provider>
  );
}

export default RestaurantReducerProvider;
