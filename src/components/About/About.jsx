import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import { FaAward, FaRegFolderOpen } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';

export default function About() {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about me"></img>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1 Year Learning</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>2 Worldwide</small>
                        </article>

                        <article className="about__card">
                            <FaRegFolderOpen className="about__icon" />
                            <h5>Project</h5>
                            <small>10+ and learning</small>
                        </article>
                    </div>

                    <p>
                        To work in an environment which besides offering me challenging jobs, would provide me the
                        opportunity to grow in the competitive market.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
}
