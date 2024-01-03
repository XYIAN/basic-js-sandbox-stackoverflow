import React, { useState, useEffect } from "react";
import "./_dHeader.css";
/**
 * Created by XYIAN for stack overflow answers
 * Get a good answer? Follow me on github or linkedin to get more help and examples!
 * @date 1/2/2024 - 9:25:49 PM
 */
export const DynamicHeader = () => {
  const [headerStyle, setHeaderStyle] = useState({
    backgroundColor: "black",
    color: "white",
  });

  const handleScroll = () => {
    const header = document.getElementById("sticky-header");
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (
        rect.top <= header.offsetHeight &&
        rect.bottom >= header.offsetHeight
      ) {
        setHeaderStyle({
          backgroundColor: section.dataset.color,
          color: section.dataset.textColor,
        });
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
    { color: "white", textColor: "black", content: "Section 1" },
    { color: "black", textColor: "white", content: "Section 2" },
    { color: "white", textColor: "black", content: "Section 3" },
  ];

  return (
    <div>
      <header id="sticky-header" style={headerStyle}>
        Sticky Header
      </header>
      {sections.map((section, index) => (
        <div
          key={index}
          className="section"
          style={{
            backgroundColor: section.color,
            color: section.textColor,
            height: "100vh",
          }}
          data-color={section.color}
          data-text-color={section.textColor}
        >
          <h2>{section.content}</h2>
        </div>
      ))}
    </div>
  );
};
