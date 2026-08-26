
import { useState } from "react";
// @ts-ignore
import "./Main.css";

const myprojects = [
  {
    id: 1,
    title: "DentFlow",
    category: "React & Laravel",
    image: "./Dentflow.png",
    description:
      "A dental management platform for managing patients, appointments, treatments, invoices and clinic data.",
    live: "https://dentflow-frontend-adsn13ja4-ac-46a2.vercel.app/login",
    github: "https://github.com/souhaib2003/dentflow-frontend",
  },

  {
    id: 2,
    title: "Darimmo",
    category: "React",
    image: "./Darimmo.png",
    description:
      "A modern real estate website designed to showcase properties and help visitors discover available listings.",
    live: "https://darimmo-demo.vercel.app/",
    github: "",
  },
];

const Main = () => {
  const [currentactive, SetCurrentactive] = useState("all");

  const filteredProjects =
    currentactive === "all"
      ? myprojects
      : myprojects.filter(
          (project) => project.category === currentactive
        );

  return (
    <main className="flex">

      <section className="flex left-section">

        <button
          onClick={() => SetCurrentactive("all")}
          className={currentactive === "all" ? "active" : ""}
        >
          all projects
        </button>

        <button
          onClick={() => SetCurrentactive("React & Laravel")}
          className={
            currentactive === "React & Laravel"
              ? "active"
              : ""
          }
        >
          React & Laravel
        </button>

        <button
          onClick={() => SetCurrentactive("React")}
          className={
            currentactive === "React"
              ? "active"
              : ""
          }
        >
          React
        </button>

        

      </section>

      <section className="flex right-section">

        {filteredProjects.map((item) => {
          return (
            <article
              key={item.id}
              className="card"
            >

              <img
                width={266}
                src={item.image}
                alt={item.title}
              />

              <div
                style={{ width: "266px" }}
                className="box"
              >

                <h1 className="title">
                  {item.title}
                </h1>

                <p className="sub-title">
                  {item.description}
                </p>

                <div className="flex icons">

                  <div
                    style={{ gap: "11px" }}
                    className="flex"
                  >

                    <a
                      className="icon-link"
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${item.title} live demo`}
                    ></a>

                    {item.github && (
                      <a
                        className="icon-github"
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${item.title} GitHub`}
                      ></a>
                    )}

                  </div>

                  <a
                    className="link flex"
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    more

                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>

                </div>

              </div>

            </article>
          );
        })}

      </section>

    </main>
  );
};

export default Main;