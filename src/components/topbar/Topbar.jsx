import React from 'react';
import "./topbar.css"
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from '../../actions/userActions';
export default function Topbar() {
  const dispatch = useDispatch();

  let history = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    history("/");
  }

  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logoSpan">
                    <img src={require('./habitatservice.png')} className="logo" alt="" />
                </span>
            </div>
            <div className="topRight">
                 <button className="logout" onClick={logoutHandler}>Se déconnecter</button>
            </div>
        </div>
    </div>
  ) 
}
