import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./team.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Heads } from "../../data/Heads";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Team() {
  let arr = Heads();
  return (
    <>
      <div className="team">
        <div className="heading">Our Team</div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >

          {
            arr.map((item)=>{
              return(
                <SwiperSlide>
                <div className="team-head">
                  <img src={item.image} alt="sandeep" />
                  <div className="name">{item.name}</div>
                  <div className="position">({item.position})</div>
                  <div className="icons">
                    <a href="/">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-instagram-square"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </>
  );
}
