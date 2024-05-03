import React from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimony = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className=" h-[100%]">
        <div className="one bg-gray-800 text-white p-4 h-[100%] border-x-4">
          <div className="title">
            <h1
              className=" text-center font-bold text-[20px]"
              data-aos="zoom-in"
            >
              "An Unforgettable Adventure"
            </h1>
            <hr className="my-3 border-orange-500 m-auto border-[3px] w-[100px] " />
          </div>
          <p className="text-[20px] text-justify">
            "Booking with UrFlyntym was the best decision I made for my trip!
            From start to finish, they provided top-notch service and
            personalized attention to detail. Thanks to their expert
            recommendations, I was able to explore hidden gems and create
            memories that will last a lifetime. I can't wait to book my next
            adventure with UrFlyntym!" <br />
            <i>- Emily S</i>.
          </p>
        </div>
        <div className="one bg-gray-800 text-white p-4 h-[100%] border-x-4">
          <div className="title">
            <h1
              className=" text-center font-bold text-[20px]"
              data-aos="zoom-in"
            >
              "A Dream Vacation Come True"
            </h1>
            <hr className="my-3 border-orange-500 m-auto border-[3px] w-[100px] " />
          </div>
          <p className="text-[20px] text-justify">
            "I can't thank UrFlyntym enough for helping me plan the perfect
            vacation. Their team went above and beyond to ensure every aspect of
            my itinerary was tailored to my preferences, and the result was
            nothing short of magical. From luxury accommodations to
            unforgettable excursions, every moment was a dream come true. I
            highly recommend UrFlyntym to anyone looking for a truly exceptional
            travel experience!"
            <br /> <i>- Michael D</i>.
          </p>
        </div>
        <div className="one bg-gray-800 text-white p-4 h-[100%] border-x-4">
          <div className="title">
            <h1
              className=" text-center font-bold text-[20px]"
              data-aos="zoom-in"
            >
              "Exceeded Expectations"
            </h1>
            <hr className="my-3 border-orange-500 m-auto border-[3px] w-[100px] " />
          </div>
          <p className="text-[20px] text-justify">
            "UrFlyntym exceeded all my expectations and then some! Their
            attention to detail, insider knowledge, and personalized service
            made my trip one for the books. Every recommendation was spot on,
            and I felt like I was in good hands from beginning to end. I can't
            thank them enough for creating such a memorable experience. I'll
            definitely be booking with UrFlyntym again in the future!" <br />
            <i>-Sarah L</i>.
          </p>
        </div>
        <div className="one bg-gray-800 text-white p-4 h-[100%] border-x-4">
          <div className="title">
            <h1
              className=" text-center font-bold text-[20px]"
              data-aos="zoom-in"
            >
              "Effortless and Enjoyable"
            </h1>
            <hr className="my-3 border-orange-500 m-auto border-[3px] w-[100px] " />
          </div>
          <p className="text-[20px] text-justify">
            "Planning my trip with UrFlyntym was effortless and enjoyable from
            start to finish. Their team took the time to understand my travel
            style and preferences, and they delivered an itinerary that exceeded
            my wildest expectations. Thanks to their expertise and attention to
            detail, I was able to relax and enjoy every moment of my journey
            without any worries. I can't recommend UrFlyntym highly enough!"
            <br />
            <i>- John M</i>.
          </p>
        </div>
        <div className="one bg-gray-800 text-white p-4 h-[100%] border-x-4">
          <div className="title">
            <h1
              className=" text-center font-bold text-[20px]"
              data-aos="zoom-in"
            >
              "Exceptional Service"
            </h1>
            <hr className="my-3 border-orange-500 m-auto border-[3px] w-[100px] " />
          </div>
          <p className="text-[20px] text-justify">
            "UrFlyntym provided exceptional service every step of the way. From
            the moment I inquired about booking to the moment I returned home,
            their team was responsive, knowledgeable, and dedicated to ensuring
            my trip was perfect in every way. I'm grateful for their expertise
            and professionalism and can't wait to plan my next adventure with
            them!"
            <br />
            <i>- Laura H.</i>.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimony;
