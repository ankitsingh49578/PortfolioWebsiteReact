import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import timelineElements from "./TimeLineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  return (
    <div id="about" className="pr-2 md:pr-0">
      <h1 data-aos="fade-up" className="text-6xl text-center dark:text-[#a0a8b3] font-semibold mb-10">
        Education
      </h1>
      <div data-aos="fade-left">
        <VerticalTimeline>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                contentStyle={{ padding: "0px"}}
                key={element.id}
                date={<span className="pl-3 md:pl-0">{element.year}</span>}
                
                iconStyle={
                  element.icon === "school"
                    ? { background: "#06d6a0" }
                    : { background: "#f9c74f" }
                }
                icon={<SchoolOutlinedIcon />}
              >
                <div className="dark:bg-white bg-blue-500 dark:text-gray-700 text-white p-5 rounded-lg">
                  <h1 className="text-xl font-bold font-serif">
                    {element.name}
                  </h1>
                  <h3 className="font-semibold font-serif">
                    {element.location}
                  </h3>
                  <p className="">{element.description}</p>
                  {/* <h3 className="mt-4 text-xs font-semibold">
                    {element.year}
                  </h3> */}
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
