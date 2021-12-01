import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Nav,Container,  Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
             <Navbar className="mx-5 justify-content-end">
                    <Link className="me-3"  to="/home">Home</Link>
                    <Link className="me-3"  to="/about">About</Link>
                    <Link className="me-3"  to="/project">Projects</Link>
                 
                    <Link className="me-3"  to="/contact">Contact Me</Link>
                    <Link className="me-3"  to="/blogs">blogs</Link>
                    <a href='https://drive.google.com/file/d/1zBPfOfV1zWEMw19V9EY9BTIINN5tePRV/view'>Resume download</a>
                      </Navbar>
        </div>
       
    );
};

export default Header;