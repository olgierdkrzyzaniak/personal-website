"use client";
import React from "react";
import styles from "./CopyToClipboard.module.css";

function CopyToClipboard({ content, children }) {
  const handleClick = () => {
    navigator.clipboard.writeText(content);
  };
  return (
    <button className={styles.Button} onClick={handleClick}>
      {children}
    </button>
  );
}

export default CopyToClipboard;
