import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function BackButton () {
 const navigate = useNavigate()
  return (
    <h3 onClick={()=>navigate(-1)} className="backbutton">Go Back </h3>
  )
}
