import { useState } from "react";
import MediaRow, { MediaRowItem } from "./MediaRow";
import MediaModal from "./MediaModal";

const skills: MediaRowItem[] = [
  {
    title: "Languages",
    subtitle: "Core Stack",
    description: "C, C++, Java, JavaScript, TypeScript, Python, PHP.",
    meta: "Languages",
    tags: ["JavaScript", "TypeScript", "Python"],
    gradient: "bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900",
    imageUrl: "/Languages.png",
    longDescription: "Multi-language development across systems, web, scripting, and backend ecosystems.",
    highlights: ["C/C++ for systems thinking", "JavaScript/TypeScript for web", "Python & Java for backend + automation"],
  },
  {
    title: "Web Technologies",
    subtitle: "Foundations",
    description: "HTML, CSS.",
    meta: "Web",
    tags: ["HTML", "CSS"],
    gradient: "bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900",
    imageUrl: "/Htmlcss.png",
    longDescription: "Pixel-accurate layouts, responsive grids, and accessible web foundations.",
    highlights: ["Semantic HTML structure", "Responsive CSS layouts", "Design-to-code delivery"],
  },
  {
    title: "Frameworks & Libraries",
    subtitle: "Build Faster",
    description: "React.js, Node.js, Express.js, Bootstrap, Tailwind CSS.",
    meta: "Frameworks",
    tags: ["React", "Node.js", "Express"],
    gradient: "bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900",
    imageUrl: "/reactnode.png",
    longDescription: "Modern frameworks for fast UI delivery and scalable backend services.",
    highlights: ["React UI systems", "Express API architecture", "Utility-first styling with Tailwind"],
  },
  {
    title: "Database & Messaging",
    subtitle: "Data Layer",
    description: "MySQL, MongoDB.",
    meta: "Databases",
    tags: ["MySQL", "MongoDB"],
    gradient: "bg-gradient-to-br from-amber-900 via-orange-900 to-red-900",
    imageUrl: "/database.png",
    longDescription: "Relational and document data stores with optimized querying and indexes.",
    highlights: ["Schema design", "Index optimization", "Data consistency"],
  },
  {
    title: "Tools, Cloud & Platforms",
    subtitle: "Delivery",
    description: "Git, GitHub, Render, Vercel, Figma.",
    meta: "Tools",
    tags: ["Git", "Render", "Vercel"],
    gradient: "bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900",
    imageUrl: "/GitGithub.png",
    longDescription: "Deployment and collaboration toolchain for fast shipping.",
    highlights: ["CI/CD workflows", "Cloud deployments", "Design handoff with Figma"],
  },
  {
    title: "Core CS Fundamentals",
    subtitle: "Foundations",
    description: "DBMS, OS, CN, SQL, OOPs.",
    meta: "Core CS",
    tags: ["DBMS", "OS", "CN"],
    gradient: "bg-gradient-to-br from-neutral-900 via-zinc-800 to-stone-900",
    imageUrl: "/csfundamental.png",
    longDescription: "Strong CS base for systems thinking, networking, and data modeling.",
    highlights: ["Database principles", "Operating systems", "Computer networks"],
  },
  {
    title: "Soft Skills",
    subtitle: "Collaboration",
    description: "Time Management, Leadership, Problem-Solving, Adaptability, Quick Learner, Communication.",
    meta: "Soft Skills",
    tags: ["Leadership", "Adaptability", "Communication"],
    gradient: "bg-gradient-to-br from-rose-900 via-red-900 to-orange-900",
    imageUrl: "/softskills.png",
    longDescription: "People-first collaboration with ownership and delivery focus.",
    highlights: ["Leadership and accountability", "Clear communication", "Problem-solving mindset"],
  },
];

const SkillsSection = () => {
  const [selected, setSelected] = useState<MediaRowItem | null>(null);

  return (
    <>
      <MediaRow
        title="Skills & Strengths"
        items={skills}
        enableWheelScroll
        onItemClick={(item) => setSelected(item)}
      />
      <MediaModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default SkillsSection;
