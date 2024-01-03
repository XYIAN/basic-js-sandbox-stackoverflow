import React, { useState, useEffect } from "react";
import "./_dHeader.css";
export const DynamicHeader = () => {
  const [headerColor, setHeaderColor] = useState("black");

  const handleScroll = () => {
    const header = document.getElementById("sticky-header");
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (
        rect.top <= header.offsetHeight &&
        rect.bottom >= header.offsetHeight
      ) {
        setHeaderColor(section.dataset.color);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = [
    { color: "white", content: "Section 1" },
    { color: "black", content: "Section 2" },
    { color: "white", content: "Section 3" },
  ];

  return (
    <div>
      <header id="sticky-header" style={{ backgroundColor: headerColor }}>
        Sticky Header
      </header>
      {sections.map((section, index) => (
        <div
          key={index}
          className="section"
          style={{ backgroundColor: section.color, height: "100vh" }}
          data-color={section.color}
        >
          <h2>{section.content}</h2>
        </div>
      ))}
    </div>
  );
};
