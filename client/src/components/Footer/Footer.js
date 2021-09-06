import React, { Component } from 'react';
import './_footer.scss';
import Logo from '../../assests/images/img1.png'
import MDNLogo from '../../assests/images/mdnlogo.png';
import codeWar from '../../assests/images/cwlogo.png';



function Footer (){
    
        return (
            <>
            <div>
                <footer className= "footer">
                    <img className='footer_logo' src= {Logo} alt="logo" />
                    <h1>
                        More Great Resources
                    </h1>

                    <div className='footer__websites'>

                    <a href="https://developer.mozilla.org/en-US/">
                        <div className='footer__logo-wrap'>
                            <p className='footer__logo-desc'>PROVIDES INFORMATION ABOUT OPEN WEB TECHNOLOGIES</p>
                                <img className='footer__logo' src= {MDNLogo} />
                            
                        </div>
                    </a>

                    <a href='https://www.uidesigndaily.com/'>
                    <div className='footer__logo-wrap'>
                            <p className='footer__logo-desc'>FREE, OPEN-SOURCE UI DESIGN RESOURCES</p>
                                <img className='footer__logo' src='https://uidesigndaily.com/public/img/og-image.png' />
                            
                        </div>
                    </a>
                    <a href='https://www.tomorrow.io/'>
                    <div className='footer__logo-wrap'>
                            <p className='footer__logo-desc'>WHERE CODERS DEVELOP MASTERY THROUGH CHALLENGE</p>
                                <img className='footer__logo1' src={codeWar} />
                            
                        </div>
                  
                    </a>
                    </div>
                </footer>

        </div>
        </>
        
    
        );
    }


export default Footer;