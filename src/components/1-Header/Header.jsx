
// @ts-ignore
import "./Header.css";
import React, { useEffect, useState } from "react";

function Header() {
  const [showModal, setShowModal] = useState(false);

  // Dark Mode by default
  const [theme, setTheme] = useState(
    localStorage.getItem("curentMode") || "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }

    localStorage.setItem("curentMode", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <header className="flex">

      {/* Mobile menu */}
      <button
        className="menu icon-menu flex"
        onClick={openModal}
        aria-label="Open menu"
      />

      <div></div>

      {/* Desktop Navigation */}
      <nav>
        <ul className="flex">

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>
      </nav>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="mode flex"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {/* Mobile Modal */}
      {showModal && (
        <div className="fixed">

          <ul className="modal">

            <li>
              <button
                className="icon-close"
                onClick={closeModal}
                aria-label="Close menu"
              />
            </li>

            <li>
              <a href="#about" onClick={closeModal}>
                About
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeModal}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeModal}>
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}

    </header>
  );
}

export default Header;

