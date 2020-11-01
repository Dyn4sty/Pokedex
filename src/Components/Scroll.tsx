import React from "react";

const Scroll = ({ children }: { children: React.ReactNode }) => (
  <div style={{ overflow: "scroll", height: "800px" }}>{children}</div>
);
export default Scroll;
