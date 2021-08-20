import React, { useState ,useContext} from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import {FirebaseContext} from '../../store/Context'
import { useHistory } from 'react-router-dom';
function Login() {
  const history=useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(email,password);
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    // Signed in
    alert("Successfullt loged in")
    history.push("/")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error.message)
  });

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
           value={password}
           onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
