import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Experience() {
// My Experience Here
const experience = [
  {
    companyName: "As a Freelancer",
    dateStart: "July 2024",
    dateEnd: "December 2026",
    position: "Front End Develper",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis odio voluptate asperiores sapiente ipsa ullam qui tempore expedita voluptatum?",
    work: ["Develop There Official Website"]
  },
  {
    companyName: "As a WebDevelpor",
    dateStart: "July 2024",
    dateEnd: "December 2026",
    position: "Front End Develper",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis odio voluptate asperiores sapiente ipsa ullam qui tempore expedita voluptatum?",
    work: ["Maked E-Commerce Website For Client",]
  },
  {
    companyName: "As a Contributed Team Task",
    dateStart: "July 2024",
    dateEnd: "December 2026",
    position: "Front End Develper",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis odio voluptate asperiores sapiente ipsa ullam qui tempore expedita voluptatum?",
    work: [ "Have Contributed On The Team Task"]
  },
];
return (
  <Card data-aos = "zoom-in" className="h-[85vh] overflow-y-auto bg-[#eeeeee]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight text-[#006666] uppercase">Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
  <div className="-my-8 divide-y-2 divide-[#6b6b6b]">
      {/* Data Here */}
      {experience.map((item, i) => (
        <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 uppercase">
            {item.position}
          </span>
          <span className="mt-1 text-[#006666] text-sm">{`${item.dateStart} - ${item.dateEnd}`}</span>
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
        </CardContent>
      </Card>
)
}

