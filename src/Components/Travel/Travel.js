import React from 'react';
import travel from './../assets/travel-agency.jpg';
const Travel = () => {
    return (
        <div>
              <div className="card">
    <img className="card-img-top" src={travel} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Travel Agency</h5>
      <p className="card-text">

      It is a MERN Stack full project. <br/>

This project is designed using the css framework ReactBootstrap. <br/>

The login users will be able to manage his/her orders.<br/>

Admin will be able to easily upload products and make others admin.<br/>

Here you will get a dashboard both for users and admin.<br/>

Users can Register in the website and Login.<br/>

Customers will be able to purchase .They also can give review.</p>
    </div>
    <div className="card-footer mx-5">

     <a href='https://travel-agaency.firebaseapp.com/'>live site</a>
      <a className=" mx-2" href='https://github.com/MDSUMONALI-1/travel-agency-client'>Client-code</a>
      <a href='https://github.com/MDSUMONALI-1/travel-agency-server'>Server-code</a>
    </div>
  </div>
        </div>
    );
};

export default Travel;