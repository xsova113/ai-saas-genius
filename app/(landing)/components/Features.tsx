import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="px-4 md:px-10 my-8 md:my-20 pb-10 text-slate-200">
      <div className="grid grid-cols-12">
        <div className="flex flex-col col-span-3 h-64 justify-between">
          <span>haha</span>
          <span className="">haha</span>
        </div>

        <div className="flex flex-col items-center col-span-6">
          <div className="relative w-[700px] h-96">
            <Image src={"/empty.png"} alt={"image"} fill />
          </div>
          <div>haha</div>
        </div>

        <div className="flex flex-col col-span-3 h-64 justify-between">
          <span>hahahadsfasdfa</span>
          <span>hahahahha</span>
        </div>
      </div>
    </div>
  );
};

export default Features;
