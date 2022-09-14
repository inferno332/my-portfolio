import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

export default function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/cong-khoa-huynh-827977187/" target="_blank">
                <BsLinkedin />
            </a>
            <a href="https://github.com/inferno332" target="_blank">
                <BsGithub />
            </a>
            <a href="https://www.facebook.com/inferno332" target="_blank">
                <BsFacebook />
            </a>
        </div>
    );
}
