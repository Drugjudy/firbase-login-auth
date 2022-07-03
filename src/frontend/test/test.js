import React, { useState, useEffect } from "react";
import RestaurantDataService from "./restaurant.js";
import { Link } from "react-router-dom";

const RestaurantsList = props => {
  const [restaurants, setRestaurants] = useState([]);

   useEffect(() => {
    retrieveRestaurants();
    
  }, []);

   const retrieveRestaurants = () => {
    RestaurantDataService.getAll()
      .then(response => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  return(
    <>
         <div className="row">
        {restaurants.map((restaurant) => {
          return (
            <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <p className="card-text">
                    <strong>Cuisine: </strong>{restaurant.title}<br/>
                
                  </p>
                 
                </div>
              </div>
            </div>
          );
        })}


      </div>
    </>
  )}

  export default RestaurantsList;