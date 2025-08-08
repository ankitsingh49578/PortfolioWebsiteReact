import React from "react";

function HomeRight() {
  return (
    <div data-aos="fade-left">
      <div className="lg:translate-y-28 translate-y-44 h-[500px] md:h-[600px] -mt-16 md:mt-0">
        <div className="p-2 w-fit lg:mr-8 bg-gradient-to-r from-green-400 via-[#03c0c6] to-purple-500 -webkit-background-clip: border-box border-transparent rounded-xl -rotate-6 hover:rotate-0 transition-all duration-500">
          <img
            src="./ankitSingh.png"
            loading="lazy"
            alt="dp.jpg"
            // height="350px"
            // width="350px"
            className="border-purple-800 rounded-2xl h-[280px] w-[280px] md:h-[340px] md:w-[310px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeRight;
