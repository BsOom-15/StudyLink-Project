import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';
import qoute_left from '../../assets/quote-left.png';
import testimonialsData from '../../assets/data/testimonialsData';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={2} // Default to 2 slides on larger screens
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1, // Show 1 slide per view on screens smaller than 768px
          },
          1024: {
            slidesPerView: 2, // Show 2 slides per view on screens 1024px or larger
          },
        }}
        onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
        onSlideChange={() => console.log('Slide changed')}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="container">
              <div className="testimonials-card">
                <div className="test-card-body">
                  <div className="quote">
                    <img src={qoute_left} alt="Quote Icon" />
                    <h2>{testimonial.studyLink}</h2>
                  </div>
                  <p>{testimonial.text}</p>
                  <div className="ratings">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} className='icon' icon={faStar} />
                    ))}
                  </div>
                </div>
                <div className="profile">
                  <div className="profile-image">
                    <img src={testimonial.image} alt="Profile" />
                  </div>
                  <div className="profile-desc">
                    <span>{testimonial.name}</span>
                    <span>{testimonial.descripe}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
