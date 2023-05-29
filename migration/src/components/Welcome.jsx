import React from "react";
import "../styles/welcome.css";

export const Welcome = () => {
  return (
    <section className="main__hello hello">
      <div class="hello__container">
        <h1 class="hello__title">Projects</h1>
        <p class="hello__text">
          From configuration to security, web apps to big data—whatever the
          infrastructure needs of your application may be, there is a Spring
          Project to help you build it. Start small and use just what you
          need—Spring is modular by design.
        </p>
      </div>
    </section>
  );
};
