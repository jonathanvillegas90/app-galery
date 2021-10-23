import React from "react";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark text-center bg-primary">
      <div className="container-fluid ">
        <p className="navbar-brand h1">
          Jonathan Villegas - &copy; {new Date().getFullYear()}{" "}
        </p>
      </div>
    </nav>
  );
};

export default Footer;
