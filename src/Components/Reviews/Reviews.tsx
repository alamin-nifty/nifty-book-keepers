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
    <div className="w-[full] h-[485px] mx-[10%]">
      <p className="text-4xl font-bold ">What Our Clients Are Saying</p>
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
              <div className="w-[880px] h-[372px] p-[20px] my-12">
                <div className="flex items-startjustify-center gap-20">
                  <div className="w-[200px] h-[200px]  ">
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
                    <div className="flex items-start mt-20">
                      <li className="flex items-center justify-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span key={index}>
                            <IoStarSharp className="text-yellow-500 w-8 h-8" />
                          </span>
                        ))}
                      </li>
                    </div>
                    <div className="flex flex-col justify-start items-start mt-3">
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
