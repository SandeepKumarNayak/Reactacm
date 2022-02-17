import { EventData } from "../../data/EventData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import SwiperCore, {
  Autoplay,
  Keyboard,
  EffectCoverflow,
  Pagination,
} from "swiper";
import { Link } from "react-router-dom";
SwiperCore.use([Autoplay, Keyboard, EffectCoverflow, Pagination]);

function Event() {
  let arr = EventData();
  return (
    <div className="event">
      <div className="heading">Events</div>
      <div className="sliderevents">
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 10,
            depth: 80,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          {arr.map((item) => {
            return (
              <SwiperSlide className="swiper-event-slide">
                <img src={item.image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="button">
        <Link to="/event">more...</Link>
      </div>
    </div>
  );
}

export default Event;
