import React from "react";
import Header from "./pages/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import data from "./data";

const App = () => {
  return (
    <div className="App">
      <Header data={data} />
      <About data={data} />
      <Resume data={data} />
      <Portfolio data={data} />
      <Contact />
      <Footer data={data} />
    </div>
  );
};

export default App;
