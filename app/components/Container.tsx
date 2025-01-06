import React from "react";

const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className="md:max-container">{children}</div>;
};

export default Container;
