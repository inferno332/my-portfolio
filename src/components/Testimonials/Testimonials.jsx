import React from 'react';
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css';
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';

const data = [
    {
        avatar: Avatar1,
        name: 'Tina Snow',
        review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porroblanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?',
    },
    {
        avatar: Avatar2,
        name: 'Shatta Wale',
        review: 'Commodi velit porroblanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?',
    },
    {
        avatar: Avatar3,
        name: 'Kwame Despite',
        review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porroblanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?',
    },
    {
        avatar: Avatar4,
        name: 'Alex',
        review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porroblanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?',
    },
];
export default function Testimonials() {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination,Navigation]}
                navigation
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt=""></img>
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}
