import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://www.genesis.com/content/dam/genesis-p2/kr/assets/models/gv80/overview/genesis-kr-overview-gv80-interior-gallery-image-08-desktop-1920x1080-ko.jpg",
      title: "제네시스 탑승한 가족",
    },
    {
      url: "https://www.genesis.com/content/dam/genesis-p2/kr/assets/models/gv80/23my/overview/genesis-kr-overview-gv80-exterior-gallery-image-06-desktop-1920x1080-ko.jpg",
      title: "제네시스와 모녀",
    },
    {
      url: "https://www.genesis.com/content/dam/genesis-p2/kr/assets/models/gv80/23my/overview/genesis-kr-gv80-highlights-side-rear-view-1920x1080.jpg",
      title: "제네시스 뒷면",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[900px] w-full m-auto py-16 px-4 relative group">
      <div
        className="
          relative overflow-hidden bg-no-repeat w-full h-full rounded-2xl bg-center bg-contain duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center py-2 absolute text-gray-600 top-[50%] left-[47%]">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
