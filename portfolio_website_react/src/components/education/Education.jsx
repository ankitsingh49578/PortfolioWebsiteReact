import React from "react";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import timelineElements from "./TimeLineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  return (
    <div data-aos="fade-up" id="about" className="pr-2 md:pr-0">
      <h1 className="text-6xl text-center dark:text-[#a0a8b3] font-semibold mb-10">
        Education
      </h1>
      <div className="">
        <VerticalTimeline>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.id}
                date={<span className="">{element.year}</span>}
                iconStyle={
                  element.icon === "school"
                    ? { background: "#06d6a0" }
                    : { background: "#f9c74f" }
                }
                icon = {<SchoolOutlinedIcon/>}
              >
                <h1 className="text-xl text-slate-700 font-bold font-serif">
                  {element.name}
                </h1>
                <h3 className="font-semibold text-slate-600 font-serif">
                  {element.location}
                </h3>
                <p className="text-slate-500">{element.description}</p>
                <h3 className="mt-4 text-slate-500 text-xs font-semibold">
                  {element.year}
                </h3>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
