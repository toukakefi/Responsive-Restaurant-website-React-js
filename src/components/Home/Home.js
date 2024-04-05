import './Home.css'
import React, { Fragment } from "react";
import Header from "./Header";
function Home() {
  return (
    <Fragment>
  <Header />
  <section className="numbers">
  <div className="Container">
    <div className="row">
        <div className="col-md-3">
           <h2>1278 +</h2>
           <h6>savings </h6>


        </div>
        <div className="col-md-3">
           <h2>5786+</h2>
           <h6>photos</h6>


        </div>
        <div className="col-md-3">
           <h2>1440+</h2>
           <h6>Rockets</h6>


        </div>
        <div className="col-md-3">
           <h2>7000+</h2>
           <h6>Globs</h6>


        </div>

    </div>

  </div>
  </section>
  </Fragment>
  );
}

export default Home;
