import React from "react";
import { MdOutlineLiveTv } from "react-icons/md";

function LiveLinkBtn({ liveLink }) {
  return (
    <>
      <a href={liveLink} target="_blank">
        <button className="bg-blue-500 text-white flex items-center gap-2 font-medium px-5 py-2 rounded hover:bg-blue-600 hover:scale-105 transition-all duration-300">
          <MdOutlineLiveTv />
          Live
        </button>
      </a>
    </>
  );
}

export default LiveLinkBtn;
