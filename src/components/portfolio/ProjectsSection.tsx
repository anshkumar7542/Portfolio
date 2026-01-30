import { useState } from "react";
import MediaRow, { MediaRowItem } from "./MediaRow";
import MediaModal from "./MediaModal";

const projects: MediaRowItem[] = [
  {
    title: "Movie Discovery & Booking Platform",
    subtitle: "Live Project",
    description:
      "Full-stack MERN platform with reviews, watchlists, showtimes, and seat reservations. Built REST APIs for theaters, bookings, recommendations, and watchlists with production-ready security.",
    meta: "Nov 2025 – Jan 2026",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900",
    imageUrl: "/movie.png",
    longDescription:
      "Engineered a full-stack MERN movie discovery and booking platform featuring reviews, watchlists, showtimes, and seat reservations. Orchestrated REST APIs for theaters, showtimes, bookings, recommendations, and watchlists with robust security and personalization.",
    highlights: [
      "Implemented JWT cookies with hardened production CORS",
      "Added profile-based location preferences for nearby theater discovery",
      "Reduced unauthorized access vectors by 40% with tightened auth flows",
    ],
    stack: ["MongoDB Atlas", "Express.js", "React (Vite)", "Node.js", "Redux Toolkit", "Tailwind CSS", "Render", "Vercel"],
    timeline: "Nov 2025 – Jan 2026",
    links: [{ label: "Live", href: "https://reel-light.vercel.app/" }],
  },
  {
    title: "Healthcare Management Portal",
    subtitle: "Live Project",
    description:
      "Healthcare platform connecting patients, doctors, and admins with AI assistant, real-time chat, dashboards, analytics, and RBAC security.",
    meta: "Nov 2025 – Dec 2025",
    tags: ["React", "Node.js", "Socket.io", "JWT"],
    gradient: "bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900",
    imageUrl: "/healthcare.png",
    longDescription:
      "Architected and developed a full-stack healthcare management platform that centralizes appointments, records, and clinical communication.",
    highlights: [
      "Integrated AI health assistant (Google Gemini) and real-time doctor-patient chat",
      "Built analytics dashboards for streamlined workflows and insights",
      "Implemented JWT auth and RBAC for secure role-based access",
    ],
    stack: ["MongoDB", "Express.js", "React (Vite + TypeScript)", "Node.js", "Tailwind CSS", "Socket.io", "JWT", "Recharts", "Google Gemini API"],
    timeline: "Nov 2025 – Dec 2025",
    links: [{ label: "Live", href: "https://medicare-main.vercel.app/" }],
  },
  {
    title: "Course Enrollment Dashboard",
    subtitle: "GitHub",
    description:
      "Centralized student course dashboard with live selection and management, progress summaries, and PHP + MySQL backend supporting 100+ concurrent records.",
    meta: "Mar 2025 – Apr 2025",
    tags: ["PHP", "MySQL", "JavaScript"],
    gradient: "bg-gradient-to-br from-amber-900 via-orange-900 to-red-900",
    imageUrl: "/course%20enrollment.png",
    longDescription:
      "Recognized a centralized student course dashboard enabling real-time viewing, selection, and management of classes with clear enrollment visibility.",
    highlights: [
      "Improved academic progress summaries through a clean, intuitive interface",
      "Built PHP + MySQL workflows supporting 100+ concurrent records",
      "Reduced manual update errors by 35%",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    timeline: "Mar 2025 – Apr 2025",
    links: [{ label: "GitHub", href: "https://github.com/anshkumar7542/Course_Enrollment" }],
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<MediaRowItem | null>(null);

  return (
    <>
      <MediaRow
        title="Projects"
        items={projects}
        onItemClick={(item) => setSelected(item)}
        cardClassName="w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px]"
        imageClassName="h-48 sm:h-56 md:h-60 lg:h-64"
      />
      <MediaModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default ProjectsSection;
