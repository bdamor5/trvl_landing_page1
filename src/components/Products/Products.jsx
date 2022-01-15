import React from "react";
import Card from "./Card";
import "./Products.css";

const Products = () => {
  return (
    <div id="products">
      <div className="container cardproducts">
        <h1>Our Services</h1>
        <div className="row gy-5">
          <div className="mx-auto col-10 col-lg-4 col-md-6 col-sm-12 cardhover">
            <Card
              ig="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBib29raW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              topic="Desired Hotels At Your Price"
            />
          </div>
          <div className="mx-auto col-10 col-lg-4 col-md-6 col-sm-12 cardhover">
            <Card
              ig="https://images.unsplash.com/photo-1463694372132-6c267f6ba561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              topic="Perfect Destinations That Suits you"
            />
          </div>
          <div className="mx-auto col-10 col-lg-4 col-md-6 col-sm-12 cardhover">
            <Card
              ig="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              topic="Travel Packages With Your Loved Ones"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
