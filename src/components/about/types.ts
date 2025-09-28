import React from "react";

export interface CompanyValue {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string; // gradient tailwind segment: from-... to-...
}

export interface Achievement {
  number: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

export interface MissionVisionValueCard {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  borderColor: string;
  bgColor: string;
  hoverBorder: string;
  iconColor: string;
  iconTextColor: string;
}

export interface FloatingIconConfig {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  left: number;
  top: number;
  delay: number;
  duration: number;
}