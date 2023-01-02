import React from "react";
import NeonStyle from "./style";

export default function NeonBorder({ children, selected = false }) {
  const classes = NeonStyle();
  return (
    <div className={selected ? classes.neonBorderSelected : classes.neonBorder}>
      {children}
    </div>
  );
}
