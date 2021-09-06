import React, { Component } from 'react';
import './_header.scss';


function Header (){
    
        return (
            <>
            <div>
            <div className="header-dark">
                <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <a className="navbar-brand" href="#">Starter-Code</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse"
                            id="navcol-1">
                            <ul className="nav navbar-nav">
                                <li className="nav-item" role="presentation"><a className="nav-link" href="#">Websites</a></li>
                                <li className="dropdown"><a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">EXP Level</a>
                                    <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Beginner</a><a className="dropdown-item" role="presentation" href="#">Intermediate</a><a className="dropdown-item" role="presentation" href="#">Advanced</a></div>
                                </li>
                            </ul>
                            <form className="form-inline mr-auto" target="_self">
                                <div className="form-group"><label for="search-field"><i className="fa fa-search"></i></label><input className="form-control search-field" type="search" name="search" id="search-field"/></div>
                            </form>
                    </div>
                </nav>
              
                        <div className="hero">
                            <h1 className="text-center">We provide you the path</h1>
                            <div className="hero__logo-flex"><img className="hero__logo" src="./frame.png" alt="logo"/></div>
                        </div>
                    
                
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </>
    
        );
    }


export default Header;