import React from "react";
import Navi from "./Navi";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div>
        <Navi></Navi>
        <form>
          <h3>Login into your Account</h3>
          <div>
            <label>USERNAME</label>
            <input type="email"></input>
          </div>
          <div>
            <label>PASSWORD</label>
            <input type="password"></input>
          </div>
          <button>Login</button>
        </form>
        <div>
          <Link to={"/signup"} className="bottomLink">you don't have account then signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
