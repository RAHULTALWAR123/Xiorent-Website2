// import React from 'react'

import Image from "next/image"
import JobsCard from "./JobsCard";


function Jobs() {
    const jobTypes = [
  {
    location: "Remote",
    type: "Full Time",
    Stipend: "15-20 k",
    title: "UI/UX Designer",
    desc: "Engaging User Experiences",
    applied: "24",
  },
  {
    location: "Bangalore, India",
    type: "Full Time",
    Stipend: "18-25 k",
    title: "Frontend Developer",
    desc: "Build responsive web interfaces with React/Next.js",
    applied: "31",
  },
  {
    location: "Remote",
    type: "Full Time",
    Stipend: "10-15 k",
    title: "Content Writer",
    desc: "Create blog posts and product documentation",
    applied: "12",
  },
  {
    location: "Mumbai, India",
    type: "Full Time",
    Stipend: "20-28 k",
    title: "Backend Engineer",
    desc: "Develop APIs and microservices using Node.js",
    applied: "19",
  },
  {
    location: "Remote",
    type: "Internship",
    Stipend: "8-12 k",
    title: "Graphic Designer",
    desc: "Design visuals for social media and marketing campaigns",
    applied: "9",
  },
  {
    location: "Delhi, India",
    type: "Internship",
    Stipend: "25-30 k",
    title: "Project Manager",
    desc: "Coordinate cross-functional teams and deliver on time",
    applied: "15",
  },
];

  return (
    <div className="relative overflow-hidden text-center py-20 px-10">
        <div
        className="absolute -top-40 -left-32 w-[550px] h-[500px]
bg-gradient-to-r from-[#C30EFF] via-[#1E92FF] via-[80%] to-[#1E92FF]
                   rounded-full blur-3xl opacity-20 pointer-events-none"
      />

        <div>

      <Image src= "/assets/jobs-head1.png"
                                alt="heading"
                                width={600}
                                height={490}
                                className="mx-auto mt-5"
            />
        </div>

        <div className="flex justify-center items-center gap-40 mt-10"  style={{ fontFamily: "var(--font-Manrope), sans-serif" }}>
            <button className="bg-clip-text text-transparent bg-gradient-to-r from-[#C21CF9] via-[#4A14FE] to-[#01EFFE] text-2xl">All Recent Jobs</button>
            <button className="text-2xl ">Full time</button>
            <button className="text-2xl ">Internships</button>
        </div>

 <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {jobTypes.map((job, idx) => (
        <JobsCard
          key={idx}
          location={job.location}
          type={job.type}
          stipend={job.Stipend}
          title={job.title}
          desc={job.desc}
          applied={job.applied}
        />
      ))}
    </div>

    </div>
  )
}

export default Jobs
