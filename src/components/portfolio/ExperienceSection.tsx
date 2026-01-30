import { useState } from "react";
import MediaRow, { MediaRowItem } from "./MediaRow";
import MediaModal from "./MediaModal";

const experiences: MediaRowItem[] = [
  {
    title: "MERN Stack Training",
    subtitle: "Gokboru Technology",
    description: "Intensive full-stack training covering MongoDB, Express.js, React, and Node.js.",
    meta: "Season 1",
    tags: ["6 Weeks", "Hands-on"],
    gradient: "bg-gradient-to-br from-neutral-900 via-zinc-800 to-stone-900",
    imageUrl: "/trainingcertificate.png",
    longDescription: "Immersive MERN training with production-style modules and hands-on builds.",
    highlights: ["Full-stack fundamentals", "API development practice", "Project-based learning"],
    links: [
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/1xtNd9mxWTywHpF29xLn_8NBtxSU6SyB8/view",
      },
    ],
  },
  {
    title: "Oracle Cloud Infrastructure",
    subtitle: "Certification",
    description: "Certified in OCI fundamentals with a focus on cloud services and deployment.",
    meta: "Special Episode",
    tags: ["OCI", "Cloud"],
    gradient: "bg-gradient-to-br from-amber-900 via-orange-900 to-red-900",
    imageUrl: "/oracel.png",
    longDescription: "Validated skills in OCI fundamentals and cloud service deployment basics.",
    highlights: ["Compute + storage basics", "Cloud architecture", "Infrastructure fundamentals"],
    links: [
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/1WrOXmm7F7jNHE7W9yT85onk7jJsQ2U6P/view",
      },
    ],
  },
  {
    title: "NPTEL Cloud Computing",
    subtitle: "Certification",
    description: "Distributed systems, virtualization, and cloud architecture fundamentals.",
    meta: "Special Episode",
    tags: ["NPTEL", "Cloud"],
    gradient: "bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900",
    imageUrl: "/neptel.png",
    longDescription: "Deep dive into distributed systems and virtualization concepts.",
    highlights: ["Virtualization", "Scalable systems", "Cloud architecture"],
    links: [
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/1gl7SBLv917SKTImVKwIxYtTa55_Cbavk/view",
      },
    ],
  },
  {
    title: "250+ LeetCode Problems",
    subtitle: "DSA Mastery",
    description: "Consistent problem-solving across arrays, graphs, DP, and system design basics.",
    meta: "Bonus Content",
    tags: ["DSA", "Algorithms"],
    gradient: "bg-gradient-to-br from-emerald-900 via-green-900 to-lime-900",
    imageUrl: "/leetcode.png",
    longDescription: "Strong algorithmic foundation with consistent practice and problem solving.",
    highlights: ["Arrays, graphs, DP", "Complexity analysis", "Interview readiness"],
  },
];

const ExperienceSection = () => {
  const [selected, setSelected] = useState<MediaRowItem | null>(null);

  return (
    <>
      <MediaRow
        title="Seasons & Episodes"
        items={experiences}
        onItemClick={(item) => setSelected(item)}
      />
      <MediaModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default ExperienceSection;
