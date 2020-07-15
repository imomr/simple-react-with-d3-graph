import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="col-12 mx-auto pt-5 pl-3 ">
          <div className="row">
            <div className="pt-5 mt-3 pt-lg-0 order-2 order-lg-1 col-sm-12 col-lg-6">
              <h1 className="mt-5 pt-3">
                this is About us page for
                <strong> forGraphMe </strong>
              </h1>
              <h2 className="my-5">Know more about GraphMe</h2>
              <div className="mt-5">
                <NavLink
                  to="/graph"
                  className="btn btn-outline-primary style-btn"
                >
                  We use D3 Graphs
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*</section>*/}
    </>
  );
};

export default About;
