"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style/style.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { IoStarSharp } from "react-icons/io5";

const reviews = [
  {
    id: 1,
    name: "James Marshall",
    title: "CEO, The Natural Lifestyles",
    description:
      "“Working with the team was amazing, as always. The team was focused on all the important details, a highly professional individual who is always available for any urgent issue we face and we are grateful beyond words! This team's accounting work is accurate, of high quality, highly consistent, and very supportive.”",
    img: "/assets/images/reviews/person1.svg",
  },
  {
    id: 2,
    name: "David Crosbie",
    title: "CEO, Teng Tools",
    description:
      "“This team is very knowledgeable in their work and comes up with solutions before seeking your approval. They can foresee problems and find solutions beforehand. I highly recommend taking their services and will be appointing the team for all future accounts work.”",
    img: "/assets/images/reviews/person2.svg",
  },
  {
    id: 3,
    name: "Ishteaq Mustaque",
    title: "CEO, Lote Tree Partner",
    description:
      "“Excellent service. Nifty and their team were extremely professional and very responsive. Would highly recommend their services.”",
    img: "/assets/images/reviews/person3.svg",
  },
];
const Reviews = () => {
  return (
    <div className="w-[full] md:h-[485px] h-full mx-[10%]">
      <p className="md:text-4xl text-2xl font-bold ">
        What Our Clients Are Saying
      </p>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {reviews.map((review) => {
          return (
            <SwiperSlide>
              <div className="md:w-[880px] md:h-[372px] w-full h-full md:p-[20px] p-2 md:my-12 my-5">
                <div className="flex md:flex-row flex-col md:items-start items-center justify-center md:gap-20 gap-5">
                  <div className="md:w-[200px] md:h-[200px] w-[100px] h-[100px] ">
                    <img
                      src={review.img}
                      alt={review.title}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-2/3">
                    <div className="text-left">
                      <p>{review.description}</p>
                    </div>
                    <div className="flex md:items-start md:justify-start items-center justify-center md:mt-20 mt-5">
                      <li className="flex items-center justify-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span key={index}>
                            <IoStarSharp className="text-yellow-500 w-8 h-8" />
                          </span>
                        ))}
                      </li>
                    </div>
                    <div className="flex flex-col md:justify-start md:items-start items-center justify-center mt-3 py-2">
                      <p className="text-lg font-bold">{review.name}</p>
                      <p className="text-sm">{review.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;
