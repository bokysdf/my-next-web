"use client";

import { HeartIcon, SendIcon } from "lucide-react";

export default function Home(){
  return (
  <div className = "w-full h-[100dvh] bg-gray-300">
    <div className = "max-w-sm w-full h-[100dvh] bg-white">
        <div className = "flex justify-between bg-green-500 px-4">
      <span className = "font-bold border">instagram</span>
      <div className = "flex items-center gap-2 border-2">
      <button onClick = {() => like()}>
      <HeartIcon className = "w-6 h-6 " />
      </button>
      <button>
      <SendIcon className = "w-6 h-6" />
       </button>
      </div>
      </div>
      </div>
     </div>
    );
}

function like() {
  //console.log("Like Button is pushed");
  prompt("Are you okay?");
  confirm("That's life");
}