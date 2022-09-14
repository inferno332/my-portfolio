import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <a href="#" className="footer__logo"></a>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com/inferno332">
                    <FaFacebookSquare />
                </a>
                <a href="https://www.instagram.com/zzzkhokho/">
                    <FaInstagram />
                </a>
                <a href="https://tiktok.com">
                    <FaTiktok />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Khoa Huynh</small>
            </div>
        </footer>
    );
}
