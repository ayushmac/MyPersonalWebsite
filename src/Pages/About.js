import PageTransition from "../Components/PageTransition";
import Contact from "./Contact";
import { Navibar } from "../Components/NaviBar";
import Education from "./Education";
import Aboutmain from "./Aboutmain";
const About = () => {
  return (
    <PageTransition>
      <Aboutmain />
      <Education />
      <Contact />
    </PageTransition>
  );
};

export default About;
