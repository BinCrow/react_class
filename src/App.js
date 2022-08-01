import React from "react";
import './App.css';
import Header from "./components/layout/Header";
import Contents from "./components/layout/Contents";
import Slider from "./components/section/Slider";
import Section2 from "./components/section/Section2";
import Section3 from "./components/section/Section3";
import Section4 from "./components/section/Section4";
import Section5 from "./components/section/Section5";
import Section6 from "./components/section/Section6";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header skill={["header", "gmarket"]}/>
      <Contents>
          <Slider />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
      </Contents>
      <Footer />
    </>
  );
}
export default App;
