import React, { Component } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import {FaWifi} from "react-icons/fa";
import {GiMeal  } from "react-icons/fa";
import {  } from "react-icons/fa";
import {  } from "react-icons/fa";
import {  } from "react-icons/fa";
import {  } from "react-icons/fa";


class Homepage extends Component {
    render() {
        return (
            <div>
             <div class="pimg1">
                <div class="ptext">
                    <span class="border">
                    <b>Hostel Finder</b>
                </span>
             </div>
             <div class="banner">
                <h1 class="caption">A Home Away From Home</h1>
                <h3 class="quote">"A Home is Where Your Story Begins"</h3>
                <button class="button-main">
                <Link to="/hostellist">
                    Visit Hostels
                </Link>
                </button>
            </div>

            </div>

  <section class="section section-light">
    <h1>We now at Hyderabad</h1>
    <p style={{fontFamily:"cursive"}}>
      Now we just developed our application in hyderabad only especially in particular area. We constantly working on this project to explore world and to help college students.
      And we are given some of the areas to search our collaborate hostels.
    </p>
  </section>

  <div class="pimg2">
    <div class="ptext">
      <span class="loaction" >
      </span>
    </div>
  </div>

  <section class="section section-dark">
    <h2>Advantages That You Get From Hostel Finder</h2>
    <hr></hr>
    <div class="items">
          <div>Reduce work load and time as it is hard to search manually</div>
          <div>To provide the owner and the seeker to communicate easily at one platform.</div>
          <div>Easy to find “HOME AWAY FROM HOME”</div>
          <div>To find a perfect place in a perfect area.</div>
          <diV>To make comparision easy Between Hostels</diV>
    </div>
    
  </section>
  <div class="pimg3">
    <div class="ptext">
      
    </div>
  </div>

  <section class="section section-dark">
    <h2 class="s3h1">Some of Top Hostels in City</h2>
    <p class="s3p">
      Check out the Hostels below. These are based on the sharing of persons in the room.
      The capacity varies from one hostel to another.
      These Hostels have all types of services.
    </p>
  </section>

  <div class="pimg1">
    <div class="ptext">
      <span class="border">
        Services
      </span>
    </div><div className="kfc">
    <div className="iconss">
      <div>
        <FaWifi />
      </div>
      <div>
        Free Wifi Facility
      </div>
    </div>
    <div className="iconss">
      <div>
        
      </div>
      <div>
        Friendly Home Nature
      </div>
    </div>
    <div className="iconss">
      <div>
      </div>
      <div>
        Canteen Facility
      </div>
    </div>
    <div className="iconss">
      <div>
        
      </div>
      <div>
        Hot water Facility
      </div>
    </div>
    <div className="iconss">
      <div>
        
      </div>
      <div>
        Gym Facility
      </div>
    </div>
    <div className="iconss">
      <div>
      </div>
      <div>
        
      </div>
    </div>
    </div>
  </div>
          <div class="aboutus">
            <div><h3>Made By @ Krishna vamshi </h3></div>
            <div><p>All Coopyrights reserved @2020</p></div>
          </div>
</div>
        );
    }
}

export default Homepage;