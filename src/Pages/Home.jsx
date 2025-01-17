import React from "react";
import AboutUs from "./AboutUs";
import Foundation from "./Foundation";
import Projects from "./Projects";
import Team from "./Team";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
    <section>
        <Banner></Banner>        
    </section>
      {/* About Us Section */}
      <section id="aboutus" className="py-16 bg-green-50">
        <AboutUs />
      </section>

      {/* Foundation Section */}
      <section id="foundation" className="py-16 bg-gray-100">
        <Foundation />
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="py-16 bg-green-50">
        <Projects />
      </section> */}

      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-100">
        <Team />
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
