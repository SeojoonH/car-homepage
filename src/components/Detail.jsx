import React from "react";

const Detail = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-2">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-2 h-[80vh]">
        <img
          className="w-full h-full object-cover p-2"
          src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/models/gv80/23my/gallery/genesis-kr-gv80-gallery-driving-road-04-848x848.jpg"
          alt="/"
        />
        <img
          className="w-full h-full object-cover p-2"
          src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/models/gv80/23my/gallery/genesis-kr-gv80-gallery-driving-through-city-05-848x848.jpg"
          alt="/"
        />
        <img
          className="w-full h-full object-cover p-2"
          src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/models/gv80/23my/gallery/genesis-kr-gv80-gallery-dynamic-driving-03-848x848.jpg"
          alt="/"
        />
        <img
          className="w-full h-full object-cover p-2"
          src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/models/gv80/23my/gallery/genesis-kr-gallery-gv80-interior-23-desktop-848x848-ko.jpg"
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">GV80 갤러리</h3>
        <p className="text-xl py-6">
          여유 있는 공간과 강력한 파워, 안전성의 조화로 만들어낸 <br />
          제네시스의 첫 번째 SUV를 소개합니다.
        </p>
        <p className="pb-6">
          편의성에서 안전성까지, GV80는 모든 부분에서 운전자와 탑승자를
          최우선으로 배려합니다.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            GV80 견적내기
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            이벤트 보러가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
