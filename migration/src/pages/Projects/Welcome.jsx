import React from "react";
import "styles/welcome/welcome.css";

export const Welcome = () => {
  return (
    <section className="main__hello hello">
      <div className="hello__container">
        <h1 className="hello__title">Projects</h1>
        <p className="hello__text">
          From configuration to security, web apps to big data—whatever the
          infrastructure needs of your application may be, there is a Spring
          Project to help you build it. Start small and use just what you
          need—Spring is modular by design.
        </p>
      </div>
    </section>
  );
};
