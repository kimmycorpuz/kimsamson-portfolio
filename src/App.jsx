import './App.css';
import Contact from "./sections/Contact/Contact.jsx";
import Footer from './sections/Footer/Footer.jsx';
import Hero from './sections/Hero/Hero.jsx';
import Projects from './sections/Projects/Projects.jsx';
import Technologies from './sections/Technologies/Technologies.jsx';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;