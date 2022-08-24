import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../firebase.config'
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value 
    }))
  };

  const onSubmit = async(e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCred = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCred.user;
      updateProfile(auth.currentUser, {
        displayName: name
      })
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp()
      await(setDoc(doc(db, 'users', user.uid), formDataCopy))
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">WELCOME !</p>
        </header>
        <form onSubmit={onSubmit}>
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
