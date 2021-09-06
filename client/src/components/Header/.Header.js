import React, { Component } from 'react';
import './_header.scss';
import Logo from '../../assests/images/img1.png'


function Header (){
    
        return (
            <>
            <div>
                <header className= "header">
                    <img src= {Logo} alt="logo" />
                    <h1>
                        Starter Code
                    </h1>
                </header>

        </div>
        </>
        
    
        );
    }


export default Header;