import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/logo.jpg';

const Home = () => {
  return (
    <>
      <div class="container px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">
          Welcome to the Travel Journal
        </h1>
        <p className="lead mb-4">
          Keep track of all your travel experiences in one place.
        </p>
        {/* <img src={logo} alt="Logo" /> */}
        <img src={logo} alt="Logo" className="img-fluid" style={{ width: '800px', height: '300px' }} />
      </div>
    </>
  );
};
export default Home;
