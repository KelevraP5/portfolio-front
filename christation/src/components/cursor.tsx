"use client";

import { useEffect } from "react";
import style from "styles/modules/components/cursor.module.css";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector("#custom-cursor");
    const moveCursor = (e: MouseEvent) => {
      if (cursor instanceof HTMLElement) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div id="custom-cursor" className={style.cursor} />;
}
