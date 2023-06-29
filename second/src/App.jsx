import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Section1 from "./component/section1/section1";
import Section2 from "./component/section2/Section2";
import Section3 from "./component/section3/Section3";
import Section4 from "./component/section4/Section4";
import Section5 from "./component/section5/Section5";
import Section6 from "./component/section6/Section6";
import Footer from "./component/footer/Footer";
import Header from "./header/Header";

function App() {
  const [count, setCount] = useState(0);

  return <div className='App'>
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
  <Section6 />
  <Footer />
  </div>;
}

export default App;
