import { memo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import member1 from 'assets/images/member1.png'
import 'swiper/css/pagination'

// import required modules
import { Pagination, EffectCoverflow } from 'swiper'

export const Team = memo(() => {
  const [activeSlide, setActiveSlide] = useState(1)
  const handleChangeSlide = (index: number) => {
    setActiveSlide(index)
  }

  return (
    <div className="mt-14 max-w-[calc(100vw-32px)]">
      <h6 className="text-center text-sm md:text-base text-accent-blue font-bold uppercase">
        teams
      </h6>
      <p className="text-center text-primary-light-8 leading-10 text-[32px] md:text-4xl font-bold mt-4">
        Meet our team of experts
      </p>
      <div className="flex items-center justify-center mt-8 ">
        <div
          className={`bg-accent-dark-1 rounded-[3px] p-5 2xl:p-24 min-w-[70%] max-w-[800px] transition duration-[400ms] ease-in-out ${
            activeSlide === 1
              ? 'order-2 border-2 border-solid border-accent-blue z-20'
              : 'order-1 scale-50 translate-x-1/2'
          }`}
        >
          <img src={member1} className="max-w-full mx-auto" alt="" />
          <p className="text-xl text-primary-light-8 tracking-[0.7px] font-semibold text-center mt-3">
            Tony Ngo
          </p>
          <p className="text-xs text-[rgba(255,255,255,0.6)] font-bold tracking-[0.5px] mt-3 text-center">
            CEO
          </p>
          <p className="tracking-[0.5px] text-center mt-8">
            Co-Founder & CEO of TUN Travel. Tung Do has had over 20 years of
            experience in the travel industry. With his knowledge and passion,
            Tung oversees all the business activities and operational processes.
          </p>
        </div>
        <div
          className={`bg-accent-dark-1 rounded-[3px] p-5 2xl:p-24 min-w-[70%] max-w-[800px] transition duration-[400ms] ease-in-out ${
            activeSlide === 2
              ? 'order-2 border-2 border-solid border-accent-blue z-20'
              : activeSlide === 3
              ? 'order-3 scale-50 -translate-x-1/2'
              : 'order-1 scale-50 translate-x-1/2'
          }`}
        >
          <img src={member1} className="max-w-full mx-auto" alt="" />
          <p className="text-xl text-primary-light-8 tracking-[0.7px] font-semibold text-center mt-3">
            Tony Ngo 2
          </p>
          <p className="text-xs text-[rgba(255,255,255,0.6)] font-bold tracking-[0.5px] mt-3 text-center">
            CEO
          </p>
          <p className="tracking-[0.5px] text-center mt-8">
            Co-Founder & CEO of TUN Travel. Tung Do has had over 20 years of
            experience in the travel industry. With his knowledge and passion,
            Tung oversees all the business activities and operational processes.
          </p>
        </div>
        <div
          className={`bg-accent-dark-1 rounded-[3px] p-5 2xl:p-24 min-w-[70%] max-w-[800px] transition duration-[400ms] ease-in-out ${
            activeSlide === 3
              ? 'order-2 border-2 border-solid border-accent-blue z-20'
              : 'order-3 scale-50 -translate-x-1/2'
          }`}
        >
          <img src={member1} className="max-w-full mx-auto" alt="" />
          <p className="text-xl text-primary-light-8 tracking-[0.7px] font-semibold text-center mt-3">
            Tony Ngo 3
          </p>
          <p className="text-xs text-[rgba(255,255,255,0.6)] font-bold tracking-[0.5px] mt-3 text-center">
            CEO
          </p>
          <p className="tracking-[0.5px] text-center mt-8">
            Co-Founder & CEO of TUN Travel. Tung Do has had over 20 years of
            experience in the travel industry. With his knowledge and passion,
            Tung oversees all the business activities and operational processes.
          </p>
        </div>
      </div>
      <ul className="flex items-center justify-center gap-x-2 mt-8 md:mt-24">
        <li>
          <div
            className={`w-2.5 h-2.5 bg-primary-light-8 rounded-full cursor-pointer ${
              activeSlide === 1 ? '' : 'bg-opacity-20'
            }`}
            onClick={() => handleChangeSlide(1)}
          ></div>
        </li>
        <li>
          <div
            className={`w-2.5 h-2.5 bg-primary-light-8 rounded-full cursor-pointer ${
              activeSlide === 2 ? '' : 'bg-opacity-20'
            }`}
            onClick={() => handleChangeSlide(2)}
          ></div>
        </li>
        <li>
          <div
            className={`w-2.5 h-2.5 bg-primary-light-8 rounded-full cursor-pointer ${
              activeSlide === 3 ? '' : 'bg-opacity-20'
            }`}
            onClick={() => handleChangeSlide(3)}
          ></div>
        </li>
      </ul>
      {/* <Swiper
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
      >
        <SwiperSlide>
          <div className="bg-accent-dark-1 border-2 border-solid border-accent-blue rounded-[3px] p-24">
            <img src={member1} className="max-w-full mx-auto" alt="" />
            <p className="text-xl text-primary-light-8 tracking-[0.7px] font-semibold text-center mt-3">
              Tony Ngo
            </p>
            <p className="text-xs text-[rgba(255,255,255,0.6)] font-bold tracking-[0.5px] mt-3 text-center">
              CEO
            </p>
            <p className="tracking-[0.5px] text-center mt-8">
              Co-Founder & CEO of TUN Travel. Tung Do has had over 20 years of
              experience in the travel industry. With his knowledge and passion,
              Tung oversees all the business activities and operational
              processes.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-accent-dark-1 border-2 border-solid border-accent-blue rounded-[3px] p-24">
            <img src={member1} className="max-w-full mx-auto" alt="" />
            <p className="text-xl text-primary-light-8 tracking-[0.7px] font-semibold text-center mt-3">
              Tony Ngo
            </p>
            <p className="text-xs text-[rgba(255,255,255,0.6)] font-bold tracking-[0.5px] mt-3 text-center">
              CEO
            </p>
            <p className="tracking-[0.5px] text-center mt-8">
              Co-Founder & CEO of TUN Travel. Tung Do has had over 20 years of
              experience in the travel industry. With his knowledge and passion,
              Tung oversees all the business activities and operational
              processes.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-accent-dark-1 border-2 border-solid border-accent-blue rounded-[3px] p-24">
            <img src={member1} className="max-w-full mx-auto" alt="" />
            <p className="text-xl text-primary-light-8 tracking-[0.7px] font-semibold text-center mt-3">
              Tony Ngo
            </p>
            <p className="text-xs text-[rgba(255,255,255,0.6)] font-bold tracking-[0.5px] mt-3 text-center">
              CEO
            </p>
            <p className="tracking-[0.5px] text-center mt-8">
              Co-Founder & CEO of TUN Travel. Tung Do has had over 20 years of
              experience in the travel industry. With his knowledge and passion,
              Tung oversees all the business activities and operational
              processes.
            </p>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  )
})
