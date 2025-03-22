"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AtSign,
  BookOpen,
  Calendar,
  ChevronDown,
  Code,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  Server,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "thank-you"];
      const currentPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Stylish Floating Navigation with Text */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-end">
        {/* Stylish background element */}
        <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-amber-50/80 to-transparent backdrop-blur-sm rounded-l-3xl -z-10"></div>

        {/* Navigation items */}
        <div className="flex flex-col items-end space-y-6 py-8 pr-6">
          <button
            onClick={() => scrollToSection("hero")}
            className={`relative text-right font-medium text-sm transition-all duration-300 ${
              activeSection === "hero" ? "text-amber-600 pr-4" : "text-gray-500 hover:text-amber-500 pr-2 hover:pr-4"
            }`}
          >
            <span className="relative z-10">HOME</span>
            {activeSection === "hero" && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-amber-400 rounded-full"></span>
            )}
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className={`relative text-right font-medium text-sm transition-all duration-300 ${
              activeSection === "about" ? "text-amber-600 pr-4" : "text-gray-500 hover:text-amber-500 pr-2 hover:pr-4"
            }`}
          >
            <span className="relative z-10">ABOUT</span>
            {activeSection === "about" && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-amber-400 rounded-full"></span>
            )}
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className={`relative text-right font-medium text-sm transition-all duration-300 ${
              activeSection === "skills" ? "text-amber-600 pr-4" : "text-gray-500 hover:text-amber-500 pr-2 hover:pr-4"
            }`}
          >
            <span className="relative z-10">SKILLS</span>
            {activeSection === "skills" && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-amber-400 rounded-full"></span>
            )}
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className={`relative text-right font-medium text-sm transition-all duration-300 ${
              activeSection === "projects"
                ? "text-amber-600 pr-4"
                : "text-gray-500 hover:text-amber-500 pr-2 hover:pr-4"
            }`}
          >
            <span className="relative z-10">PROJECTS</span>
            {activeSection === "projects" && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-amber-400 rounded-full"></span>
            )}
          </button>

          <button
            onClick={() => scrollToSection("thank-you")}
            className={`relative text-right font-medium text-sm transition-all duration-300 ${
              activeSection === "thank-you"
                ? "text-amber-600 pr-4"
                : "text-gray-500 hover:text-amber-500 pr-2 hover:pr-4"
            }`}
          >
            <span className="relative z-10">CONTACT</span>
            {activeSection === "thank-you" && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-amber-400 rounded-full"></span>
            )}
          </button>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section - Removed profile image */}
        <section
          id="hero"
          className="w-full min-h-screen flex flex-col justify-center relative bg-gradient-to-b from-amber-50 to-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/profile.png')] opacity-5 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <div className="relative w-full">
                <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter text-amber-100 leading-none mb-4 drop-shadow-sm">
                  Front-End
                </h1>

                <div className="md:flex md:items-center md:justify-between">
                  <div className="md:w-full space-y-6 z-10 relative">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 mt-8">
                      프론트엔드 개발자 <span className="font-bold">하주영</span>입니다.
                    </h2>
                  </div>
                </div>
              </div>

              {/* Arrow at the very bottom */}
              <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4 animate-bounce">
                <button
                  onClick={() => scrollToSection("about")}
                  className="rounded-full text-amber-500 hover:text-amber-600 hover:bg-amber-50 p-2"
                >
                  <ChevronDown className="h-8 w-8" />
                  <span className="sr-only">아래로 스크롤</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Completely Redesigned About Section */}
        <section id="about" className="w-full py-20 md:py-32 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/30 to-white"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-100/20 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-200/10 rounded-tr-full"></div>

          <div className="container px-4 md:px-6 relative z-10">
            {/* Section title with modern styling */}
            <div className="flex flex-col mb-16">
              <div className="flex items-center mb-2">
                <div className="w-12 h-1 bg-amber-300 rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-amber-800">About Me</h2>
                <div className="w-12 h-1 bg-amber-300 rounded-full ml-4"></div>
              </div>
              <p className="text-amber-600/60 text-lg italic ml-20">프론트엔드 개발자 하주영을 소개합니다</p>
            </div>

            {/* Main content with asymmetrical layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left column - Profile image with creative styling */}
              <div className="lg:col-span-5 lg:order-2">
                <div className="relative mx-auto max-w-md">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-full h-full border-2 border-amber-200 rounded-3xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-amber-300/50 rounded-3xl"></div>

                  {/* Main image container */}
                  <div className="relative z-10 bg-white shadow-xl rounded-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-amber-200 to-amber-100"></div>

                    <div className="pt-12 px-6 pb-6">
                      <div className="aspect-square overflow-hidden rounded-2xl">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20240910_154949148.jpg-EWDTnKzuAWljU0JB3ZNuzuWiVtuQuD.jpeg"
                          width={500}
                          height={500}
                          alt="프로필"
                          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Content with creative layout */}
              <div className="lg:col-span-7 lg:order-1">
                {/* Introduction with stylized quote */}
                <div className="relative mb-10 pl-6 border-l-4 border-amber-300">
                  <p className="text-lg text-gray-700 leading-relaxed italic">
                    IoT 기반 스마트 콘센트 개발 프로젝트를 통해 프로그래밍의 매력을 경험하고, 사용자에게 직관적이고
                    효율적인 경험을 제공하는 프론트엔드 개발에 매료되어 개발자의 길을 선택했습니다.
                  </p>
                </div>

                {/* Personal information with creative cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name card */}
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex items-center space-x-4 border border-amber-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                        <User className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-amber-600 font-medium">이름</p>
                      <p className="text-gray-800 font-bold">하주영</p>
                    </div>
                  </div>

                  {/* Birth card */}
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex items-center space-x-4 border border-amber-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-amber-600 font-medium">생년월일</p>
                      <p className="text-gray-800">1998.03.04</p>
                    </div>
                  </div>

                  {/* Phone card */}
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex items-center space-x-4 border border-amber-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-amber-600 font-medium">연락처</p>
                      <p className="text-gray-800">010-1234-5678</p>
                    </div>
                  </div>

                  {/* Email card */}
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex items-center space-x-4 border border-amber-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                        <AtSign className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-amber-600 font-medium">이메일</p>
                      <p className="text-gray-800">ju98034@gmail.com</p>
                    </div>
                  </div>

                  {/* Education card - full width */}
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex items-center space-x-4 border border-amber-100 md:col-span-2">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-amber-600 font-medium">학력</p>
                      <p className="text-gray-800">광운대학교 컴퓨터공학</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-12">
              <div className="flex items-center">
                <h2 className="text-6xl md:text-8xl font-bold text-amber-100 opacity-80 leading-none">Skills</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Frontend Skills */}
                <div className="bg-white rounded-xl p-8 shadow-md border border-amber-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full">
                      <Code className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-800">Frontend</h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "HTML5",
                      "CSS3",
                      "Tailwind CSS",
                      "Redux",
                      "Styled Components",
                      "Framer Motion",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-2 bg-amber-50/50 p-3 rounded-lg border border-amber-100 hover:bg-amber-50 hover:border-amber-200 transition-all duration-200"
                      >
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div className="bg-white rounded-xl p-8 shadow-md border border-amber-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <Server className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Backend</h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "Firebase",
                      "RESTful API",
                      "GraphQL",
                      "MySQL",
                      "PostgreSQL",
                      "AWS",
                      "Docker",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-2 bg-amber-50 p-3 rounded-lg border border-amber-100"
                      >
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-white rounded-xl p-8 shadow-md border border-amber-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <Code className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Tools</h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Git",
                      "GitHub",
                      "VS Code",
                      "Figma",
                      "Webpack",
                      "Jest",
                      "npm/yarn",
                      "Postman",
                      "Slack",
                      "Notion",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-2 bg-amber-50 p-3 rounded-lg border border-amber-100"
                      >
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Skills */}
                <div className="bg-white rounded-xl p-8 shadow-md border border-amber-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <Globe className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Other</h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "UI/UX Design",
                      "Responsive Design",
                      "SEO",
                      "Web Performance",
                      "Accessibility",
                      "Cross-Browser",
                      "Mobile-First",
                      "PWA",
                      "Testing",
                      "CI/CD",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-2 bg-amber-50 p-3 rounded-lg border border-amber-100"
                      >
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-20 md:py-32 bg-amber-50/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-12">
              <div className="flex items-center">
                <h2 className="text-6xl md:text-8xl font-bold text-amber-100 opacity-80 leading-none">Projects</h2>
              </div>

              {/* Team Projects */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-amber-700 border-b border-amber-200 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-[3px] after:bg-amber-400">
                  Team Projects
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2].map((project) => (
                    <Card
                      key={`team-${project}`}
                      className="overflow-hidden border-amber-100 hover:border-amber-300 transition-all duration-300 shadow-sm hover:shadow-md group"
                    >
                      <div className="relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=500`}
                          width={500}
                          height={300}
                          alt={`팀 프로젝트 ${project}`}
                          className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent"></div>
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-2 text-amber-800">팀 프로젝트 {project}</h4>
                        <p className="text-gray-600 mb-4">
                          이 프로젝트에 대한 간략한 설명으로, 주요 기능과 사용된 기술을 강조합니다.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge
                            variant="secondary"
                            className="bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                          >
                            React
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                          >
                            Tailwind
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                          >
                            API
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-amber-200 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              코드
                            </Button>
                          </Link>
                          <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-amber-200 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              데모
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Personal Projects */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-amber-700 border-b border-amber-200 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-[3px] after:bg-amber-400">
                  Personal Projects
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((project) => (
                    <Card
                      key={`personal-${project}`}
                      className="overflow-hidden border-amber-100 hover:border-amber-300 transition-all duration-300 shadow-sm hover:shadow-md group"
                    >
                      <div className="relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=500`}
                          width={500}
                          height={300}
                          alt={`개인 프로젝트 ${project}`}
                          className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent"></div>
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-2 text-amber-800">개인 프로젝트 {project}</h4>
                        <p className="text-gray-600 mb-4">
                          이 프로젝트에 대한 간략한 설명으로, 주요 기능과 사용된 기술을 강조합니다.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge
                            variant="secondary"
                            className="bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                          >
                            React
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                          >
                            Tailwind
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                          >
                            API
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-amber-200 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              코드
                            </Button>
                          </Link>
                          <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-amber-200 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              데모
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You Section - Mirroring the Hero section for symmetry */}
        <section
          id="thank-you"
          className="w-full min-h-screen flex flex-col justify-center relative bg-gradient-to-t from-amber-50 to-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/profile.png')] opacity-5 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full max-w-3xl mx-auto">
                <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter text-amber-100 leading-none mb-4 drop-shadow-sm">
                  Thank You
                </h1>

                <div className="space-y-8 mt-12">
                  <p className="text-xl md:text-2xl text-gray-700">
                    포트폴리오를 봐주셔서 감사합니다.
                    <br />
                    함께 일하게 되어 기쁠 것 같습니다.
                  </p>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                    <Link
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-amber-700 hover:text-amber-500 transition-colors"
                    >
                      <Github className="h-6 w-6" />
                      <span>github.com/yourusername</span>
                    </Link>

                    <Link
                      href="https://blog.example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-amber-700 hover:text-amber-500 transition-colors"
                    >
                      <BookOpen className="h-6 w-6" />
                      <span>blog.example.com</span>
                    </Link>

                    <Link
                      href="mailto:ju98034@gmail.com"
                      className="flex items-center gap-2 text-amber-700 hover:text-amber-500 transition-colors"
                    >
                      <Mail className="h-6 w-6" />
                      <span>ju98034@gmail.com</span>
                    </Link>
                  </div>

                  <div className="mt-12 pt-8 border-t border-amber-100">
                    <p className="text-lg font-medium text-amber-800">하주영</p>
                    <p className="text-gray-600">프론트엔드 개발자</p>
                  </div>
                </div>
              </div>

              {/* Arrow at the very bottom pointing back to top */}
              <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4 animate-bounce">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="rounded-full text-amber-500 hover:text-amber-600 hover:bg-amber-50 p-2 rotate-180"
                >
                  <ChevronDown className="h-8 w-8" />
                  <span className="sr-only">맨 위로 스크롤</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-amber-100">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Ha Juyoung. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
