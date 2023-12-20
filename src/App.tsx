import React from "react";
import Navbar from "./navbar.tsx";
import SubFooter from "./Footer.tsx";
import Card from "./cards.tsx";
import Hero from "./hero.tsx";
import Working from "./working/working.tsx";
import WhyChoose from "./whyChoose.tsx";
import AboutUs from "./aboutUs.tsx";

const App: React.FC = () => {
  return (

    <div>
      <Navbar />
      <Hero />
      <Card />
      <Working />
      <WhyChoose />
      <AboutUs />
      <SubFooter />
    </div>

  );
};

export default App;
