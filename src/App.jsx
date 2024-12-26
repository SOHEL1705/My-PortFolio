import Navigation from "./components/header/Navigation";
import About from "./pages/About";
import States from "./components/States";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <div className=" bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 text-white">
        <Navigation />
        <Hero />
        <About/>
        <States />
        <Projects/>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
