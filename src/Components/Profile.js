import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { saveLogin } from '../Services/Actions/action';


function Profile() {
    
    const getuser = useSelector((state) => state.data.loginData);
    let dispatch = useDispatch();
    useEffect(()=>{
        fetch(`https://dummyjson.com/users/${getuser.id}`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            dispatch(saveLogin(data));
            //navigate("/Finalprofile");
            
        })
    },[])
    
    
    //console.log("Final",user);
    return (
        <div>
            <h1>User Details</h1>
            <div class="card">
                <img src={getuser.image} alt="image" />
                <h1>{getuser.firstName}</h1><h1>{getuser.maidenName}</h1><h1>{getuser.lastName}</h1>
                <h3>Email: {getuser.email}</h3>
                <h3>ID: {getuser.id}</h3>
                <h3>{getuser.username}</h3>
                <h3>Gender: {getuser.gender}</h3>
                <h3>Eye Color: {getuser.eyeColor}</h3>
                <h3>{getuser.domain}</h3>
                <h3>{getuser.userAgent}</h3>
                
                
                
                <h3>EIN: {getuser.ein}</h3>
                
                <h3>IP: {getuser.ip}</h3>
                
                <h3>Password: {getuser.password}</h3>
                <h3>Phone: {getuser.phone}</h3>
                <h3>SSN: {getuser.ssn}</h3>
                <h3>University: {getuser.university}</h3>

            </div>
        </div>
    )
}

export default Profile