import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div className="container caro">
        <h1 className="team">Our Team</h1>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide container-fluid"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="d-block mx-auto img-fluid"
                alt=""
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Emily Brit</h5>
                <p>"I Feel Alive Working Here"</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="d-block mx-auto img-fluid"
                alt=""
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>David Fonn</h5>
                <p>"Never Been More Productive"</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                className="d-block mx-auto img-fluid"
                alt=""
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Adren Joe</h5>
                <p>"Fueling My Passion Here"</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <i className="fas fa-caret-left" style={{color:'white'}}></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <i className="fas fa-caret-right" style={{color:'white'}}></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
