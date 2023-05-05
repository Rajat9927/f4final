import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { saveLogin } from '../Services/Actions/action';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [getuser, setGetuser] = useState([]);
  let [loginFailed, setLoginFailed] = useState([]);
  var obj;
  let dispatch = useDispatch();

  //Fetch APi with POSt method to check user credential
  async function loginCheck() {
    console.log(username)
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
      .then(res => res.json())
      .then(data => {
        obj = data;
        localStorage.setItem("token", obj.token);
        localStorage.setItem("id", obj.id);
        //console.log(obj);
        setGetuser(obj);
      })

  }
  dispatch(saveLogin(getuser));
  //console.log(getuser)
  if(getuser.id){
    //console.log(getuser.id);
    navigate("/Profile");
  }
  else if(getuser.message){

  }
  else{
    console.log()
  }

  return (
    <>
      <h1>Login</h1>
      <div><label>Username : </label><input type="text" name="username" onChange={(e) => setUsername(e.target.value)} /></div>
      <div><label>Password : </label><input type="text" name="password" onChange={(e) => setPassword(e.target.value)} /></div>
      <div><button onClick={loginCheck}>Login</button></div>
    </>
  )
}

export default Home