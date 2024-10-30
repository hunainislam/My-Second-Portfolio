"use client"

import React from 'react'
import { useEffect } from "react";
// For Animated On Scroll Library
import AOS from "aos";
import "aos/dist/aos.css"
// My Components
import {Detail} from './Detail';
import { Sidebar } from './Sidebar';
import MobileCard from './mobileComponent/Card';
import MobileEducation from './mobileComponent/Education';
import MobileExperience from './mobileComponent/Experience';
import MobileSkills from './mobileComponent/Skills';
import MobileProjects from './mobileComponent/Projects';
import MobileContact from './mobileComponent/Contact';
import Header from './mobileComponent/Header';
import Footer from './mobileComponent/Footer';

export default function MainPage() {
    // UseEffect For AOS
    useEffect(() => {
        AOS.init({
          once: false,
        })
      }, [])
      return (
        <div className="bg-[#006666] text-yellow-300">
          {/* Mobile View */}
          <div className="md:hidden overflow-x-hidden bg-white  h-screen">
            {/* Header Mobile */}
            <Header />
             {/* Main Card  */}
             <MobileCard />
             {/* Education */}
             <MobileEducation />
             {/* Experience */}
             <MobileExperience />
             {/* Skills */}
             <MobileSkills />
             {/* Projects */}
             <MobileProjects />
             {/* Contact */}
             <MobileContact />
             {/* Footer */}
             <Footer />
          </div>
          {/* Desktop View*/}
          <div className="hidden md:flex md:overflow-hidden md:h-screen">
            {/* Sidebar */}
            <div className="w-1/5">
                <Sidebar />
            </div>
            {/* Main */}
            <div className="w-full">
                <Detail />
            </div>
        </div>
        </div>
      );
    }
    
