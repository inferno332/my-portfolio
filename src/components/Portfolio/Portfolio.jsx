import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio2.png';
import IMG2 from '../../assets/portfolio1.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

//  DO NOT USE THE IMAGES IN PRODUCTION

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Covid Tracker',
        github: 'https://github.com/inferno332/covid-tracker',
        demo: 'https://cvix-19-tracker.netlify.app/',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Youtube Clone',
        github: 'https://github.com/inferno332/youtube_clone',
        demo: 'https://yt-clone-reaxt.netlify.app/',
    },
    {
        id: 3,
        image: IMG3,
        title: 'MERN Ecommerce Shop',
        github: 'https://github.com/inferno332/Ecommerce_shop',
        demo: 'https://ls-eshop.vercel.app/',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Maintaining tasks and tracking progress',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    },
    {
        id: 6,
        image: IMG6,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    },
];
export default function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Rencent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt=""></img>
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="_blank">
                                    Github
                                </a>
                                <a href={demo} className="btn btn-primary" target="_blank">
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
