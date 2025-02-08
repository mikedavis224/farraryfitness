import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Updated import path for Swiper modules
import 'swiper/css';
import 'swiper/css/autoplay';

const Testimonials = () => (
  <div className="bg-gray-100 text-gray-800 py-16">
    <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
    <div className="max-w-4xl mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Delay in milliseconds
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        loop={true}
        modules={[Autoplay]} // Add Autoplay module here
      >
        <SwiperSlide>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <p className="italic text-lg">
              "Nugotech helped us streamline our operations and saved us a ton of time!"
            </p>
            <h3 className="mt-4 font-semibold">- Jane Doe</h3>
            <p className="text-gray-600">CEO, Example Corp</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <p className="italic text-lg">
              "The team at Nugotech is highly professional and delivers outstanding results."
            </p>
            <h3 className="mt-4 font-semibold">- John Smith</h3>
            <p className="text-gray-600">CTO, Tech Innovations</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <p className="italic text-lg">
              "Their cybersecurity solutions are top-notch. Highly recommend Nugotech!"
            </p>
            <h3 className="mt-4 font-semibold">- Sarah Brown</h3>
            <p className="text-gray-600">Head of IT, SecureNet</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
);

export default Testimonials;
