import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="px-4 md:px-10 my-8 md:my-20 pb-10 text-slate-200">
      <div className="grid grid-cols-12">
        <div className="flex flex-col col-span-3 h-64 justify-between">
          <div className="chat chat-end">
            <div className="chat-bubble">
              <h1 className="chat-header">Conversation Generator</h1>
              <p className="">
                Start a conversation with Genius and ask whatever you want!
              </p>
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">
              <h1 className="chat-header">Image Generator</h1>
              <p className="">
                Start a conversation with Genius and ask whatever you want!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center col-span-6">
          <div className="relative w-[700px] h-96">
            <Image src={"/empty.png"} alt={"image"} fill />
          </div>
          <div className="card bg-neutral">
            <div className="card-body items-center ">
              <h1 className="card-title">Conversation Generator</h1>
              <p className="">
                Start a conversation with Genius and ask whatever you want!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col col-span-3 h-64 justify-between">
          <div className="chat chat-start">
            <div className="chat-bubble">
              <h1 className="chat-header">Conversation Generator</h1>
              <p className="">
                Start a conversation with Genius and ask whatever you want!
              </p>
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble">
              <h1 className="chat-header">Conversation Generator</h1>
              <p className="">
                Start a conversation with Genius and ask whatever you want!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
