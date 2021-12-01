import React from 'react';
import suzuki from './../assets/suzuki-bike.jpg';

const Suzuki = () => {
    return (
        <div>
              <div className="card">
    <img className="card-img-top" src={suzuki} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Suzuki-Bikes</h5>
      <p className="card-text">
      live site:https://suzuki-bikes.web.app/ <br/>

1.Build With React,MongoDb,Node.js ,Express.js <br/>

2.Here you will get a dashboard both for users and admin. <br/>

3.Admin will be able to easily upload products and make others admin. <br/>

4.Customers will be able to purchase . <br/>

5.Users can Register in the website and Login. <br/>

6.The login users will be able to manage his/her orders. <br/>

This project is designed using the css framework ReactBootstrap. <br/>
8.customer also give review.
      </p>
    </div>
    <div className="card-footer">
    <a href='https://suzuki-bikes.web.app/'>Live site</a>
    <a className=" mx-2" href='https://github.com/MDSUMONALI-1/suzuki-bike-client'>Client-code</a>
    <a href='https://github.com/MDSUMONALI-1/suzuki-bike-server'>Server-code</a>
    
    </div>
  </div>
        </div>
    );
};

export default Suzuki;