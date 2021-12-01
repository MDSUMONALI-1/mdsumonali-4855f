import React from 'react';
import healthcare from './../../assets/healthcare.jpg';

const Healthcare = () => {
    return (
        <div>
              <div className="card">
    <img className="card-img-top" src={healthcare} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Healthcare</h5>
      <p className="card-text">
      It’s a React Project.<br/> Users can Register in the website and Login.<br/>
      using the css framework ReactBootstrap.<br/>
        Customers will be able to purchase. <br/>Users will be able to booking doctor’s appointment.<br/>
         The login users will be able to manage his/her orders. <br/>
customer also give review.</p>
    </div>
    <div className="card-footer">
    <a href='https://healthcare-b0503.firebaseapp.com/'>Live site</a>
    <a className=" mx-2" href='https://github.com/MDSUMONALI-1/healthcare-website'>Client-code</a>
    
    </div>
  </div>
        </div>
    );
};

export default Healthcare;