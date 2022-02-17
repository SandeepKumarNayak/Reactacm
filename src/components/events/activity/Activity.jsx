import React from 'react';
import './workshop.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "./styles.css";
import SwiperCore, {Autoplay, EffectCreative,Keyboard } from "swiper";
SwiperCore.use([Autoplay,Keyboard]);

function Activity(props) {
  return <div className='workshop'>
      <div className="heading">
          <span>{props.title}</span>
      </div>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        keyboard={{

            "enabled":true
        }}
        autoplay={{
            "delay":3000,
            "disableOnInteraction":false
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide className='event-slide'>
          <div className="image">
            <img src="images/reactworkshop.jpeg" alt="reactworkshop.jpeg"/>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam ab eligendi deleniti, ducimus facilis voluptas quibusdam repellendus aliquid corrupti doloremque assumenda? Iusto a eius nesciunt nam rerum accusamus maxime!
          </div>
        </SwiperSlide>


        <SwiperSlide className='event-slide'>
          <div className="image">
            <img src="images/reactworkshop.jpeg" alt="reactworkshop.jpeg"/>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis quisquam ipsa qui reprehenderit dolore ipsam dignissimos debitis. Odio incidunt ullam architecto quae similique illum nostrum atque dolorum est facere?
          </div>
        </SwiperSlide>


        <SwiperSlide className='event-slide'>
          <div className="image">
            <img src="images/reactworkshop.jpeg" alt="reactworkshop.jpeg"/>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod velit recusandae reprehenderit laborum culpa ut doloremque dolore accusamus reiciendis voluptates?
          </div>
        </SwiperSlide>

        
        <SwiperSlide className='event-slide'>
          <div className="image">
            <img src="images/reactworkshop.jpeg" alt="reactworkshop.jpeg"/>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse ut laborum deserunt voluptas exercitationem non saepe magnam in natus at vel qui molestias sint possimus consequatur doloribus, voluptates quasi.
          </div>
        </SwiperSlide>
        
      </Swiper>
  </div>;
}

export default Activity;
