import one from "../../assets/best-time-hardware-repairs-1024x682.jpg";
import two from "../../assets/Buckeye-Computer-Services-software-installation-scaled.jpg";
import three from "../../assets/virus_detected_image.jpg";
import four from "../../assets/unnamed.jpg";
import five from "../../assets/media_16ff515e90bad22890fca417235f5006c7c6ea79b.jpeg";
import six from "../../assets/IT.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const WhyChoose = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="h-[100%] w-full  bg-why bg-center bg-cover">
      <div className="m-auto flex flex-col justify-center  py-[30px]">
        <div className="title2 text-white">
          <h1
            className="text-center font-bold mt-10 md:mt-0 text-[30px]"
            data-aos="zoom-in"
          >
            Why Choose UrFlyntym?
          </h1>
          <hr
            className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] "
            data-aos="zoom-out"
          />
        </div>
        <div className="flex justify-center flex-wrap">
          <div
            data-aos="zoom-out"
            className="pointer transition-all w-[300px] border-[3px] border-x-white m-5  hover:shadow-2xl"
          >
            <img src={one} alt="Waitech Computer Engineering" />
            <div className="text-center py-[10px]">
              <h1 className="text-[20px] text-orange-200 font-bold">
                Expertise
              </h1>
              <i className="font-bold text-white">
                With years of experience and a deep understanding of the travel
                industry, our team of dedicated professionals is equipped to
                handle all your travel needs with precision and care.
              </i>
              <br />
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="pointer transition-all w-[300px] border-[3px] border-x-white m-5  hover:shadow-2xl"
          >
            <img src={two} alt="Waitech Computer Engineering" />
            <div className="text-center py-[10px]">
              <h1 className="text-[20px] text-orange-200 font-bold">
                Personalization
              </h1>
              <i className="font-bold text-white">
                We understand that every traveler is unique. That's why we take
                the time to listen to your preferences, interests, and
                aspirations, ensuring that each journey is tailor-made to suit
                your individual desires.
              </i>
              <br />
            </div>
          </div>
          <div
            data-aos="zoom-out"
            className="pointer transition-all w-[300px] border-[3px] border-x-white m-5  hover:shadow-2xl"
          >
            <img src={three} alt="Waitech Computer Engineering" />
            <div className="text-center py-[10px]">
              <h1 className="text-[20px] text-orange-200 font-bold">
                Customer Satisfaction
              </h1>
              <i className="font-bold text-white">
                Your satisfaction is our ultimate goal. From the moment you
                reach out to us until you return home, our team is committed to
                providing unparalleled service and support, ensuring a seamless
                and stress-free travel experience.
              </i>
              <br />
            </div>
          </div>
          <div
            data-aos="zoom-out-up"
            className="pointer transition-all w-[300px] border-[3px] border-x-white m-5  hover:shadow-2xl"
          >
            <img src={four} alt="Waitech Computer Engineering" />
            <div className="text-center py-[10px]">
              <h1 className="text-[20px] text-orange-200 font-bold">
                Global Reach
              </h1>

              <i className="font-bold text-white">
                With a wide network of partners and suppliers around the globe,
                we offer access to a diverse range of destinations,
                accommodations, and activities, allowing you to explore the
                world on your terms.
              </i>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
