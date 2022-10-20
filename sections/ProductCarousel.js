/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

export default function ProductCarousel({ product }) {
  return (
    <div className="2xl:mx-auto 2xl:container flex justify-center">
      <div className="2xl:px-20 px-6 w-full lg:w-5/6">
        {/* Carousel for Small-Sized Screen */}
        <CarouselProvider
          className="relative block sm:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="js-flickity flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <Slider>
              <Slide index={0}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                  <h3 className="text-white text-2xl text-center font-normal">
                    Excellent Quality and I really feel the freshness when
                    unpack. I have ordered more ghee from my regular
                    consumption. It has lots of nutritions and it tastes
                    amazing.
                  </h3>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                  <h3 className="text-white text-2xl text-center font-normal">
                    Excellent Quality and I really feel the freshness when
                    unpack. I have ordered more ghee from my regular
                    consumption. It has lots of nutritions and it tastes
                    amazing.
                  </h3>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                  <h3 className="text-white text-2xl text-center font-normal">
                    Excellent Quality and I really feel the freshness when
                    unpack. I have ordered more ghee from my regular
                    consumption. It has lots of nutritions and it tastes
                    amazing.
                  </h3>
                </div>
              </Slide>
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className=""
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for Medium and Large-Sized Screen */}
        <CarouselProvider
          className="relative hidden sm:block p-0 m-0"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite={true}
          currentSlide={1}
        >
          <div className="flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="text-4xl font-extrabold text-darkGreen "
              id="prev"
            >
              <AiOutlineCaretLeft />
            </ButtonBack>
            <Slider>
              <Slide className="carousel__inner-slideLarge" index={0}>
                <img src={product.image} alt={product.name} />
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={0}>
                <img src={product.image} alt={product.name} />
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={0}>
                <img src={product.image} alt={product.name} />
              </Slide>
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="text-4xl font-extrabold text-darkGreen"
              id="next"
            >
              <AiOutlineCaretRight />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
