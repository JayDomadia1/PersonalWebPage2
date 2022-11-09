import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
