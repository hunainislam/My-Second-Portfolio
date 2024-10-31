import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Education() {
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
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto bg-[#eeeeee]">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase text-[#006666]">
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-[#6b6b6b]">
          {/* UI/UX DESIGNER */}
          {education.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold text-gray-700 uppercase">
                  {item.field}
                </span>
                <span className="mt-1 text-[#006666] text-sm">{item.date}</span>
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
      </CardContent>
    </Card>
  );
}
