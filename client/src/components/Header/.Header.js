import React, { Component } from 'react';
import './_header.scss';


Header = () => {
    
        return (
            <>
            <div>
            <div class="header-dark">
                <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <a class="navbar-brand" href="#">Starter-Code</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse"
                            id="navcol-1">
                            <ul class="nav navbar-nav">
                                <li class="nav-item" role="presentation"><a class="nav-link" href="#">Websites</a></li>
                                <li class="dropdown"><a class="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">EXP Level</a>
                                    <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">Beginner</a><a class="dropdown-item" role="presentation" href="#">Intermediate</a><a class="dropdown-item" role="presentation" href="#">Advanced</a></div>
                                </li>
                            </ul>
                            <form class="form-inline mr-auto" target="_self">
                                <div class="form-group"><label for="search-field"><i class="fa fa-search"></i></label><input class="form-control search-field" type="search" name="search" id="search-field"></div>
                            </form>
                    </div>
                </nav>
              
                        <div class="hero">
                            <h1 class="text-center">We provide you the path</h1>
                            <div class="hero__logo-flex"><img class="hero__logo" src="./frame.png" alt="logo"/></div>
                        </div>
                    
                
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </>
    
        );
    }


export default Header;