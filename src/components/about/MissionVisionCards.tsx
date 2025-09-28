"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { MISSION_VISION_VALUES } from "./constants";

interface MissionVisionCardsProps {
  inView: boolean;
  reduceMotion: boolean;
}

export function MissionVisionCards({ inView, reduceMotion }: MissionVisionCardsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {MISSION_VISION_VALUES.map(
        (
          {
            icon: IconComponent,
            title,
            description,
            borderColor,
            bgColor,
            hoverBorder,
            iconColor,
            iconTextColor
          },
          idx
        ) => (
          <motion.div
            key={title}
            initial={reduceMotion ? undefined : { opacity: 0, y: 50 }}
            animate={
              inView
                ? { opacity: 1, y: 0 }
                : reduceMotion
                ? undefined
                : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
          >
            <Card
              className={`h-full ${bgColor} backdrop-blur-xl border ${borderColor} shadow-2xl shadow-blue-500/10 ${hoverBorder} transition-all duration-300 group`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${iconColor} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}
                  >
                    <IconComponent className={`h-6 w-6 ${iconTextColor}`} aria-hidden="true" />
                  </div>
                  <CardTitle className={`${iconTextColor} font-sans`}>{title}</CardTitle>
                </div>
                <CardDescription className="text-gray-300 leading-relaxed font-sans text-sm">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        )
      )}
    </div>
  );
}