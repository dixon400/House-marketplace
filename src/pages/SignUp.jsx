import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    mane: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.trget.value 
    }))
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">WELCOME !</p>
        </header>
        <form>
        <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            onChange={onChange}
            value={name}
          />
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            onChange={onChange}
            value={email}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => {
                setShowPassword((prevState) => !prevState);
              }}
            />
          </div>
          <Link to='/forgot-password' className='forgotPassWordLink'>Forgot Password</Link>
          <div className="signUpBar">
            <p className="signUpText">
              Sign Up
            </p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#ffffff" width='34px' height='34px'/>
            </button>
          </div>
        </form>

        {/* Google Oauth */}
        <Link to='/login' className="registerLink">
          SignIn
        </Link>
      </div>
    </>
  );
}

export default SignUp;
