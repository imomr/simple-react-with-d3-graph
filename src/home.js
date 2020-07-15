import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/*<section id="header" className="d-flex align-middle">*/}
      <div className="container">
        <div className="col-12 mx-auto pt-5">
          <div className="row">
            <div className="pt-5 mt-3 pt-lg-0 order-2 order-lg-1 col-sm-12 col-lg-6">
              <h1 className="mt-5 pt-3">
                Check status data with
                <strong className="brand-name"> GraphMe </strong>
              </h1>
              <h2 className="my-5">
                We provide graphical data for countries around the world
              </h2>
              <div className="mt-5">
                <NavLink
                  to="/graph"
                  className="btn btn-outline-primary style-btn"
                >
                  Show me the graph
                </NavLink>
              </div>
            </div>
            <div className="pt-5 pt-lg-5 order-1 order-lg-2 col-sm-12 col-lg-6">
              <img
                alt="header img"
                src="http://daa.ae/uploads/1.png"
                className="img-fluid animated custom-info-img"
              />
            </div>
          </div>
        </div>
      </div>
      {/*</section>*/}
    </>
  );
};

export default Home;
