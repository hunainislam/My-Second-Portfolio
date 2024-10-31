import React from "react";

export default function MobileExperience() {
  // My Expereince Here
  const experience = [
    {
      companyName: "As a Freelancer",
      dateStart: "July 2024",
      dateEnd: "December 2026",
      position: "Front End Develper",
      work: ["Develop There Official Website"],
    },
    {
      companyName: "As a WebDevelpor",
      dateStart: "July 2024",
      dateEnd: "December 2026",
      position: "Front End Develper",
      work: ["Maked E-Commerce Website For Client"],
    },
    {
      companyName: "As a Contributed Team Task",
      dateStart: "July 2024",
      dateEnd: "December 2026",
      position: "Front End Develper",
      work: ["Have Contributed On The Team Task"],
    },
  ];
  return (
    <div id="about" className="w-full p-5 bg-[#eeeeee]">
      <h2 className="scroll-m-20 border-b border-[#6b6b6b] pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-[#006666]">
        Experience
      </h2>
      <div className="mt-4 divide-y-2 divide-[#6b6b6b]">
        {/* Data Here */}
        {experience.map((item, i) => (
          <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700 uppercase">
                {item.position}
              </span>
              <span className="mt-1 text-sm text-[#006666]">{`${item.dateStart} - ${item.dateEnd}`}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                {item.companyName}
              </h2>
              <ul className="ml-4 list-disc mr-1 text-[#006666]">
                {item.work.map((workitem, i) => (
                  <li key={i}>{workitem}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
