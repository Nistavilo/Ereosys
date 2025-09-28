"use client";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { CODE_EXAMPLE } from "./constants";
import { highlightLine } from "./helpers.tsx";

import { Code, Check, Copy, Database, Cloud } from "lucide-react";

interface CodeTerminalProps {
  reduceMotion: boolean;
}

function WindowDots({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="flex gap-2">
      {["bg-red-500","bg-yellow-500","bg-green-500"].map((c,i) => (
        <motion.div
          key={c}
          className={`w-3 h-3 rounded-full ${c}`}
          animate={reduceMotion ? undefined : { opacity: [1, 0.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function CodeTerminal({ reduceMotion }: CodeTerminalProps) {
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<number | null>(null);
  const announcedRef = useRef(false);

  const codeText = CODE_EXAMPLE || "// CODE_EXAMPLE bulunamadı.";
  const codeLines = useMemo(() => codeText.split("\n"), [codeText]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      copyTimeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
      announcedRef.current = true;
    } catch (err) {
      console.error("Kopyalama hatası:", err);
    }
  }, [codeText]);

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, x: 50 }}
      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative"
      aria-label="Kod örneği terminal penceresi"
    >
      <motion.div
        className="absolute -inset-3 bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-blue-500/25 rounded-xl blur-xl"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.25, 0.5, 0.25], scale: [1, 1.02, 1] }
        }
        transition={{ duration: 5, repeat: Infinity }}
        aria-hidden="true"
      />
      <Card className="relative bg-slate-900/95 backdrop-blur-2xl border border-blue-500/40 shadow-2xl shadow-blue-500/30 overflow-hidden rounded-xl">
        <CardContent className="p-0">
          <div className="bg-slate-800/60 px-4 py-3 border-b border-blue-500/30 flex items-center gap-2">
            <WindowDots reduceMotion={reduceMotion} />
            <div className="text-sm text-blue-400 ml-2 font-mono flex items-center gap-1">
              <Code className="h-3 w-3" aria-hidden="true" />
              example.tsx
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs text-gray-500 font-mono bg-slate-700/50 px-2 py-1 rounded text-[10px]">
                EXAMPLE
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="text-blue-300 hover:text-blue-100 hover:bg-blue-500/20 p-2"
                aria-pressed={copied}
                aria-label={copied ? "Kopyalandı" : "Kodu kopyala"}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
              <span className="sr-only" aria-live="polite">
                {copied ? "Kod kopyalandı" : announcedRef.current ? "" : ""}
              </span>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-br from-slate-900/70 to-blue-900/20">
            <pre className="text-sm font-mono text-gray-300 leading-relaxed" role="region" aria-label="Kod örneği">
              <code>
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={reduceMotion ? undefined : { opacity: 0, x: -20 }}
                    animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    transition={
                      reduceMotion ? undefined : { duration: 0.3, delay: 0.8 + index * 0.04 }
                    }
                    className="flex hover:bg-blue-500/8 -mx-2 px-2 py-0.5 rounded transition-colors"
                  >
                    <span className="text-gray-600 mr-3 select-none w-8 text-right text-xs">
                      {index + 1}
                    </span>
                    <span className="text-gray-300 text-sm">
                      {highlightLine(line)}
                    </span>
                  </motion.div>
                ))}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-xl"
        animate={
          reduceMotion
            ? undefined
            : { y: [-8, 8, -8], rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }
        }
        transition={{ duration: 6, repeat: Infinity }}
        aria-hidden="true"
      >
        <Database className="h-7 w-7" />
      </motion.div>
      <motion.div
        className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-xl shadow-xl"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.15, 1], rotate: [0, -6, 0], y: [0, -6, 0] }
        }
        transition={{ duration: 5, repeat: Infinity }}
        aria-hidden="true"
      >
        <Cloud className="h-8 w-8" />
      </motion.div>

      {/* Connection Lines */}
      <motion.div
        className="absolute top-1/2 -left-16 w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-purple-500"
        animate={
          reduceMotion ? undefined : { scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }
        }
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-1/2 -right-16 w-12 h-px bg-gradient-to-l from-transparent via-purple-500 to-blue-500"
        animate={
          reduceMotion ? undefined : { scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }
        }
        transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
        aria-hidden="true"
      />
    </motion.div>
  );
}