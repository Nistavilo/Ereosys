import React from "react";

export interface FloatingChar {
  left: number;
  duration: number;
  delay: number;
  char: string;
}

export interface StatItem {
  value: string;
  label: string;
  color: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}