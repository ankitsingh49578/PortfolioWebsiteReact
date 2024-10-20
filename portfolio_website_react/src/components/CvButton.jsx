import React from "react";

function CvButton() {
  return (
    <div className=" hover:-translate-y-[1.5px] hover:translate-x-[1.5px] transition-all hover:cursor-pointer mt-28 text-[17px] border-2 border-[#03c0c6] p-3 w-[210px] text-center font-semibold rounded-xl text-[#494747] bg-[#03c0c6] select-none hover:text-[#e4e1e1] ">
      <a
        href="https://drive.google.com/file/d/1orcnLZ_VcsVJx85mqqsRSKQQP9c6nWm4/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
}

export default CvButton;
