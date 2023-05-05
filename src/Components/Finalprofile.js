import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Finalprofile() {
    const finaluser = useSelector((state) => state.data.profileData);
    console.log("FInal",finaluser)
    return (
        <div>Finalprofile</div>
    )
}

export default Finalprofile