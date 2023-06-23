import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Text3DComponent from "./components/Text3D";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />

      <div className="flex mt-[30%] w-full">
        <Text3DComponent word1="MERN" word2="Developer" />
        <Text3DComponent word1="ReactNative" word2="Developer" />
        <Text3DComponent word1="Blockchain" word2="Developer" />
      </div>
      <Experience />
      <Education />
      <Skills />
      <Project />
    </>
  );
}

export default App;