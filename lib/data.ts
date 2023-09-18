import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import MO from "@/public/MO.png";
import OMS from "@/public/OMS.png";
import Main from "@/public/Main.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Sonepat, Haryana",
    description:
      "I graduated after 4 years of studying BTech in SRM University. I immediately found a job as a Software Design Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Software Design Engineer",
    location: "Pune, Maharashtra",
    description:
      "I worked as a Software Design Engineer for 1 year. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Front-end Developer",
    location: "Delhi",
    description:
      "I'm now a front-end developer working as at Hippo Stores. My stack includes React, Next.js, TypeScript, Tailwind, MongoDB, Reactjs. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Manual Order",
    description:
      "I worked as a front-end developer on this project for 1 years. This website i used create B2B orders for the company.",
    tags: ["React", "Next.js", "NodeJS", "Tailwind", "PostGreSQL"],
    imageUrl: MO,
  },
  {
    title: "Order Management System",
    description:
      "This site maintains all the orders, users, payment information for the company.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: OMS,
  },
  {
    title: "Hippo Stores",
    description:
      "A public website for normal users. It is also the main website for Hippo Stores.",
    tags: ["React", "Next.js", "SQL", "Tailwind"],
    imageUrl: Main,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Framer Motion",
] as const;
