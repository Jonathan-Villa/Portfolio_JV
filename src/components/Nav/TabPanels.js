import React from "react";

export function TabPanels({ component: Component, value, index, ...other }) {
  return (
    <div
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Component />}
    </div>
  );
}
