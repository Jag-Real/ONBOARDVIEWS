import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">React</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                  <a className="nav-link" href="/Customer">Customer</a>
                  <a className="nav-link" href="/Product">Product</a>
                  <a className="nav-link" href="/Sales">Sales</a>
                  <a className="nav-link" href="/Store">Store</a>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}