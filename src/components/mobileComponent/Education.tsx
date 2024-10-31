import React from "react";

export default function MobileEducation() {
  // My Education Here
  const education = [
    {
      center: "It Initiative Governor House Karachi",
      date: "October 2024",
      field: "UI/UX Designer",
      details:
        "I am a UI/UX designer who is an expert in enhancing the user experience and visual appeal of any digital product. My work is not limited to design; I also play an essential role in connecting users with the product and making their interactions smooth. I conduct research and testing to understand the needs and preferences of users, and then I incorporate those insights into my designs.",
    },
    {
      center: "It Initiative Governor House Karachi",
      date: "October 2024",
      field: "Web Develpor",
      details:
        "I am a web developer skilled in creating and maintaining websites that deliver an engaging user experience. My expertise lies in both front-end and back-end development, allowing me to build dynamic and responsive web applications. I am proficient in programming languages such as HTML, CSS, and JavaScript for front-end development, as well as server-side technologies like Node.js, Python for back-end development.",
    },
  ];
  return (
    <div className="w-full p-5 bg-[#eeeeee]">
      <h2 className="scroll-m-20 border-b border-[#6b6b6b] pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-[#006666]">
        Education
      </h2>
      <div className="mt-4 divide-y-2 divide-[#6b6b6b]">
        {/* UI/UX DESIGNER */}
        {education.map((item, i) => (
          <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700 uppercase">
                {item.field}
              </span>
              <span className="mt-1 border-[#6b6b6b] text-sm text-[#006666]">
                {item.date}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                {item.center}
              </h2>
              <p className="leading-relaxed text-[#006666]">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}
