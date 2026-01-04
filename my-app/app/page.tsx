"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "techstack", "connect"].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  PORTFOLIO / {new Date().getFullYear()}
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Natnael
                  <span className="text-muted-foreground"> Taye</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Full Stack Developer who enjoys building high-performing web
                  applications that blend smart design, solid architecture and{" "}
                  <span className="text-foreground">
                    cutting-edge technology
                  </span>
                  .
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Ethiopia</div>
                </div>
              </div>
            </div>
            <div className="relative image-container">
              <img
                src="./images/meh.jpg"
                alt="natnael"
                className="object-cover w-full h-full dark:border-gray-800 image"
              />
            </div>
          </div>
        </header>

        <section
          id="techstack"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Tech Stack</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  category: "Frontend",
                  description: "Modern UI frameworks and libraries",
                  technologies: [
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "Next.js",
                    "Shadcn UI",
                    "Redux Toolkit",
                  ],
                },
                {
                  category: "Backend",
                  description: "Server-side technologies and runtimes",
                  technologies: [
                    "Node.js",
                    "Express.js",
                    "GO",
                    "Prisma ORM",
                    "REST APIs",
                  ],
                },
                {
                  category: "Databases",
                  description: "Database technologies",
                  technologies: [
                    "MongoDB",
                    "MySQL",
                    "PostgreSQL",
                    "Supabase",
                    "NeonDB",
                  ],
                },
                {
                  category: "Tools & DevOps",
                  description: "Development and deployment tools",
                  technologies: [
                    "Git",
                    "GitHub",
                    "Vercel",
                    "Docker",
                    "Postman",
                    "Langflow",
                    "Ollama",
                  ],
                },
              ].map((stack, index) => (
                <div
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">
                        {stack.category}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {stack.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs border border-border rounded bg-muted/50 group-hover:border-muted-foreground/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
              <div className="text-sm text-muted-foreground font-mono">
                {new Date().getFullYear()}
              </div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  image: "./images/bekur.png",
                  title: "Bekur",
                  description:
                    "A platform that helps students discover scholarships and international study/work opportunities using AI-driven recommendations.",
                  tech: [
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Tailwind CSS",
                    "Shadcn UI",
                    "Prisma ORM",
                    "PostgreSQL",
                    "Ollama",
                    "Langflow",
                  ],
                  status: "In progress",
                  preview: "https://example.com/bekur",
                },
                {
                  image: "./images/dvora.png",
                  title: "Dvora Hub - Health & Therapy",
                  description:
                    "A health and therapy platform designed to connect users with wellness and therapy professionals.",
                  tech: [
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Redux toolkit",
                    "Tailwind CSS",
                    "Express.js",
                    "Prisma ORM",
                    "MySQL",
                  ],
                  status: "",
                  preview: "https://www.dvorahub.com/",
                },
                {
                  image: "./images/mesay.png",
                  title: "Mesay furniture",
                  description:
                    "Full-stack ecommerce application for Mesay Furniture, designed to showcase furniture products and provide a smooth online shopping experience.",
                  tech: [
                    "React",
                    "JavaScript",
                    "Redux toolkit",
                    "Tailwind CSS",
                    "Express.js",
                    "Prisma ORM",
                    "MySQL",
                  ],
                  status: "",
                  preview: "https://ecommerce-blue-beta-93.vercel.app",
                },
                {
                  image: "./images/nensebo.png",
                  title: "Nensebo coffee export",
                  description:
                    "I developed a modern, responsive front-end web application for a coffee export company using Next.js. The project included building clean UI components, showcasing the company’s product catalog, export information, and brand story.",
                  tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
                  status: "",
                  preview: "https://www.sidamanensebo.com/",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-8 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-4">
                    <div className="w-60 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-8 flex flex-col gap-5 justify-between">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg sm:text-2xl font-medium">
                          {project.title}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            project.status === "" ? "border-none" : "border"
                          } transition-colors duration-300 ${
                            project.status === "In progress"
                              ? "text-green-600"
                              : "text-amber-600"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed max-w-lg">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 mt-4 lg:mt-0">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={project.preview}
                        target="_blank"
                        rel="noreferrer"
                        className={` ${
                          project.status === "In progress"
                            ? "hidden"
                            : "inline-flex"
                        } items-center gap-2 w-fit px-4 py-2 text-sm border border-border rounded-md hover:border-muted-foreground/50 hover:bg-muted/50 transition-colors duration-300 mt-3 `}
                      >
                        Preview
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M13 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and
                  conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:test@example.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">
                      natitaye316@gmail.com
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "GitHub",
                    handle: "@natnaelTy",
                    url: "https://github.com/natnaelTy?tab=overview&from=2025-12-01&to=2025-12-03",
                  },
                  {
                    name: "X",
                    handle: "@natnael_ty",
                    url: "https://x.com/natnael_ty",
                  },
                  {
                    name: "LinkedIn",
                    handle: "Natnael Taye",
                    url: "https://www.linkedin.com/in/natnael-taye-718284309/",
                  },
                  {
                    name: "Phone",
                    handle: "+251975329588",
                    url: "#",
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                {new Date().getFullYear()} Natnael Taye. All rights reserved.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
