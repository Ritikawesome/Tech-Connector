import React from "react";

export default () => {
  return (
    <footer
      style={{ position: "fixed", bottom: 0, width: "100%" }}
      className="bg-dark text-white mt-5 p-4 text-center"
    >
      Copyright &copy; {new Date().getFullYear()} TechConnector
    </footer>
  );
};
