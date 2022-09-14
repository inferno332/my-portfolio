import React from 'react';
import CTA from './CTA';
import './Header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

export default function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Khoa</h1>
                <h5 className="text-light">Fullstack developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me"></img>
                </div>

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
}
