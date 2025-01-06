import React, { useEffect } from "react";

function Home() {
  return (
    <div className="sectionDiv">
      <h1>Home</h1>
      <p>
        React Routing is a powerful mechanism that enables seamless navigation
        in modern web applications. By integrating with libraries like React
        Router, developers can craft highly dynamic, single-page applications
        (SPAs) that offer a fluid user experience. Instead of reloading entire
        pages, routing in React intelligently updates the view by rendering
        specific components based on the current URL.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, With
        React Routing, it's possible to create nested layouts, manage dynamic
        paths with parameters, and even protect routes with authentication
        guards. Features like lazy loading further enhance performance by
        loading components only when required, ensuring that applications remain
        lightweight and responsive. The declarative nature of routing makes it
        easy to understand and maintain, making it a cornerstone of React-based
        development. Whether you're building a blog, an e-commerce site, or a
        dashboard, React Routing provides the flexibility to meet the needs of
        any modern web application.
      </p>
    </div>
  );
}

export default Home;
