import React from "react";
import Navi from "./Navi";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div>
        <Navi></Navi>
        <form>
          <h1>SIGNUP</h1>
          <div>
            <label>First Name</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Last Name</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Mobile Number</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Date of birth</label>
            <input type="date"></input>
          </div>
          <div>
            <label>Gender:</label>

            <input type="radio" name="gender"></input>
            <label>Male</label>

            <input type="radio" name="gender"></input>
            <label>Female</label>
          </div>

          <button>signup</button>
        </form>
        <div>
        <Link to={"/login"} className="bottomLink">already you have Account then clickme</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
