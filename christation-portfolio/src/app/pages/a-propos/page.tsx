"use client";

import style from "styles/modules/pages/a-propos/a-propos.module.css";

import { useState } from "react";

export default function About() {
  const [selectedMenu, setSelectedMenu] = useState<string>("1");

  return (
    <p>Page a propos de moi</p>
  );
}
