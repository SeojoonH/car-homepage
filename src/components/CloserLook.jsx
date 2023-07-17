import React from "react";

const CloserLook = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-zinc-600 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-white text-2xl font-bold">내장 디자인</h3>
        <p className="text-white pt-5">
          여백의 미가 돋보이는 정제되고 일체감 있는 실내는 사용 편의성을 높인
          인체 공학적 설계로 안정감 있는 프리미엄 감성 공간을 연출합니다.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/models/gv80/23my/design/genesis-kr-design-gv80-two-tone-steering-wheel-desktop-1220x600-ko.jpg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/models/gv80/design/genesis-kr-design-gv80-real-wood-trim-finish-12-desktop-940x900-ko.jpg"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/models/gv80/design/genesis-kr-design-gv80-genesis-infotainment-system-desktop-mo-1220x600-ko.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default CloserLook;
