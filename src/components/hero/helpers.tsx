import React from "react";

// Basit kural bazlı highlight
export function highlightLine(raw: string): React.ReactNode {
  if (!raw) return <span>&nbsp;</span>;

  if (raw.trim().startsWith("//")) {
    return <span className="text-green-400">{raw}</span>;
  }

  if (raw.includes("//")) {
    const [code, comment] = raw.split("//");
    return (
      <>
        <span>{code}</span>
        <span className="text-green-400">//{comment}</span>
      </>
    );
  }

  if (/\bexport\b/.test(raw)) {
    return <span className="text-purple-400">{raw}</span>;
  }

  if (/\bfunction\b/.test(raw)) {
    return <span className="text-blue-400">{raw}</span>;
  }

  return <span>{raw}</span>;
}