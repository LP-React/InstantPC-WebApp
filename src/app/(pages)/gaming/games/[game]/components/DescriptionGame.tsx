'use client'
import { useState } from "react";

interface Props {
  safeHTML: string
}

export const DescriptionGame = ({ safeHTML }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-4">
      <div
        className={`transition-all ${expanded ? "" : "line-clamp-6 overflow-hidden"}`}
        dangerouslySetInnerHTML={{ __html: safeHTML }}
      />
      <button
        className="mt-2 text-blue-500 hover:underline"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Leer menos" : "Leer más"}
      </button>
    </div>
  );
};
