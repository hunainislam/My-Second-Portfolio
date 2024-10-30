import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"

export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-5 bg-[#eeeeee]">
        {/*  Tabs Triger Button*/}
        <TabsTrigger value="home" className= "hover:bg-yellow-400 hover:text-black">Home</TabsTrigger>
        <TabsTrigger value="about" className= "hover:bg-yellow-400 hover:text-black">About</TabsTrigger>
        <TabsTrigger value="skills" className= "hover:bg-yellow-400 hover:text-black">Skills</TabsTrigger>
        <TabsTrigger value="project" className= "hover:bg-yellow-400 hover:text-black">Projects</TabsTrigger>
        <TabsTrigger value="contact" className= "hover:bg-yellow-400 hover:text-black">Contact</TabsTrigger>
      </TabsList>
      {/* Tabs Content Here */}
      {/* Education */}
      <div className="bg-[#eeeeee]">
      <TabsContent value="home">
        <Education />
      </TabsContent>
      {/* Experience */}
      <TabsContent value="about">
        <Experience />
      </TabsContent>
      {/* Skills */}
      <TabsContent value="skills">
        <Skills />
      </TabsContent>
      {/* Projects */}
      <TabsContent value="project">
        <Projects />
      </TabsContent>
      {/* Contact */}
      <TabsContent value="contact">
        <Contact />
      </TabsContent>
      </div>
    </Tabs>
  )
}

