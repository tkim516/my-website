"use client";
import Image from "next/image";
import Link from "next/link";
import Background from "./components/background";
import Head from "next/head";
import { montserrat, lato, lusitana, playfair, kodchasan } from "./ui/fonts";
import Navlink from "./components/Navbar";
import RandomQuote from "./components/random-quote";
import { ChakraProvider } from "@chakra-ui/react";
import pageStyles from "./styles/home.module.css";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import styles from "./styles/defaultButton.module.css";
import { Link as ScrollLink } from "react-scroll";

function MyApp({}) {
  return (
    <ChakraProvider>
      <body style={{ backgroundColor: "black", color: "black" }}>
        <main className="bg-black">
          <Navlink />
          <div id="homepage" className={pageStyles.bodyContainer}>
            <div className={pageStyles.topRowContainer}>
              <div
                className={`${lusitana.className} ${pageStyles.headingText} ${pageStyles.typewriter}`}
              >
                <div>
                  Hi, I&apos;m <span className="text-customYellow">Tyler Kim</span>.
                </div>
                <div>Welcome to my website!</div>
              </div>
            </div>
            <div
              className={`${montserrat.className} ${pageStyles.bodyText} mt-4 text-white font-light text-xs sm:text-sm md:text-base lg:text-lg`}
            >
              I’m currently interning at Hewlett Packard Enterprise.<br></br>
              <br></br>I also volunteer as the Director of Product and as a Software Engineer at Hack4Impact,
              where I lead teams to build custom software solutions for
              nonprofits. You can learn more about our current project{" "}
              <ScrollLink
                to="projects"
                className={`${pageStyles.linkText} text-customYellow underline`}
                smooth={true}
                duration={100}
                offset={-80}
              >
                here
              </ScrollLink>
              !
            </div>
            <div className={pageStyles.iconContainer}>
              {/*<div className={pageStyles.mouseIcon}></div>*/}
              <ScrollLink to="about" smooth={true} duration={100} offset={-80}>
                <div className={pageStyles.scrollIcon}></div>
              </ScrollLink>
            </div>
          </div>
        </main>
        <div className={pageStyles.sectionContainer}>
          <section id="about">
            <AboutPage></AboutPage>
          </section>
          <section id="projects">
            <ProjectsPage></ProjectsPage>
          </section>
          <section id="contact">
            <ContactPage></ContactPage>
          </section>
        </div>
      </body>
    </ChakraProvider>
  );
}

export default MyApp;
