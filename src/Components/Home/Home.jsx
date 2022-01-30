import { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Free from "../positions/free";
import Confirmed from "../positions/confirm";
import Busy from "../positions/busy";
import { useEffect } from "react/cjs/react.development";

function Home() {

  let fastFood = [
    {
      brand_img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmk1LYOXKswGyUEUA8ykTuVfXFxGfDcroXQ&usqp=CAU',
      brand_name :'Evos'

    }
  ]

  return (
    <>
      <section className="home">
        <div className="navbar">
          <span>Hotel admistration</span>
        </div>
        <div className="container">
          <div className="homeContent">
            <div className="navbox">
              <ul className="TipList">
                <Link to="/" className="tipListitems">
                  <li className="tipListitems nav_active">Fast foods</li>
                </Link>
                <Link to="/medium" className="tipListitems">
                  <li className="tipListitems ">National foods</li>
                </Link>
              </ul>
            </div>
            <div className="rooms">
              <ul className="_room">
                <li className="treeple hover">
                  <div className="items item_1">
                    <i className="fas fa-hotel"></i>
                    <div className="right">
                      <p>10</p>
                      <span>Empty Rooms</span>
                    </div>
                  </div>
                  <span className="link_1">View Details</span>
                </li>
                <li className="treeple hover">
                  <div className="items item_1">
                    <i className="fas fa-hotel"></i>
                    <div className="right">
                      <p>10</p>
                      <span>Empty Rooms</span>
                    </div>
                  </div>
                  <span className="link_1">View Details</span>
                </li>
                <li className="treeple hover">
                  <div className="items item_1">
                    <i className="fas fa-hotel"></i>
                    <div className="right">
                      <p>10</p>
                      <span>Empty Rooms</span>
                    </div>
                  </div>
                  <span className="link_1">View Details</span>
                </li>
                <li className="treeple hover">
                  <div className="items item_1">
                    <i className="fas fa-hotel"></i>
                    <div className="right">
                      <p>10</p>
                      <span>Empty Rooms</span>
                    </div>
                  </div>
                  <span className="link_1">View Details</span>
                </li>
                <li className="treeple hover">
                  <div className="items item_1">
                    <i className="fas fa-hotel"></i>
                    <div className="right">
                      <p>10</p>
                      <span>Empty Rooms</span>
                    </div>
                  </div>
                  <span className="link_1">View Details</span>
                </li>
                <li className="treeple">
                  <div className="items item_2">
                    <i className="far fa-thumbs-up"></i>
                    <div className="right">
                      <p>10</p>
                      <span>Confirmed Bookings</span>
                    </div>
                  </div>
                  <span className="link_2">View Details</span>
                </li>
                <li className="treeple">
                  <div className="items item_3">
                    <i className="far fa-clock"></i>
                    <div className="right">
                      <p>78</p>
                      <span>Busy Rooms</span>
                    </div>
                  </div>
                  <span className="link_3">View Details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
