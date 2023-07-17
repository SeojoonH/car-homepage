import React from "react";

function Hero() {
  return (
    <div className="w-full h-screen ">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/models/gv80/23my/overview/genesis-kr-gv80-highlights-side-rear-view-1920x1080.jpg"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>DISCOVER THE GENESIS GV80</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            제네시스 GV80
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl ">
            제네시스의 첫 SUV가 새로운 여정을 시작합니다. 역동적 우아함에 진보적
            철학과 비전을 더하여 프리미엄 SUV의 방향성을 제시합니다.
          </p>
          <button className="bg-white text-black">시승신청</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
