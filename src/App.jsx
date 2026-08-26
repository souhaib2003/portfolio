
import { useEffect, useState } from "react";
import Header from "./components/1-Header/Header";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-Main/Main";
import Contact from "./components/4-Contact/Contact";
import Footer from "./components/5-Footer/Footer";

function App() {
  const [scrollbtn, setScrollbtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollbtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="up" className="container">

      {/* Header */}
      <Header />

      {/* About */}
      <section
        id="about"
        style={{ scrollMarginTop: "100px" }}
      >
        <Hero />
      </section>

      <div className="divider" />

      {/* Projects */}
      <section
        id="projects"
        style={{ scrollMarginTop: "100px" }}
      >
        <Main />
      </section>

      <div className="divider" />

      {/* Contact */}
      <section
        id="contact"
        style={{ scrollMarginTop: "100px" }}
      >
        <Contact />
      </section>

      <div className="divider" />

      {/* Footer */}
      <Footer />

      {/* Scroll to top */}
      <a
        href="#up"
        aria-label="Scroll to top"
        style={{
          opacity: scrollbtn ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: scrollbtn ? "auto" : "none",
        }}
      >
        <button
          type="button"
          className="icon-keyboard_arrow_up scroll2Top"
        />
      </a>

    </div>
  );
}

export default App;
