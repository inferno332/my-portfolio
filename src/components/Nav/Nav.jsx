import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { MdOutlineHomeRepairService } from 'react-icons/md';

export default function Nav() {
    const [active, setActive] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}>
                <AiOutlineHome />
            </a>
            <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}>
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActive('#experience')}
                className={active === '#experience' ? 'active' : ''}
            >
                <BiBook />
            </a>
            <a
                href="#services"
                onClick={() => setActive('#services')}
                className={active === '#services' ? 'active' : ''}
            >
                <MdOutlineHomeRepairService />
            </a>
            <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}>
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
}
