'use client'
import { Box, Button, useMediaQuery } from "@chakra-ui/react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from "react";
import { montserrat, kodchasan, lato } from '../ui/fonts';
import MobileMenu from "./MobileMenu";
import styles from "../styles/navbar.module.css";
import { cursorTo } from "readline";



export default function Navlink() {
  const pathname = usePathname();

  const [isGreaterThan450] = useMediaQuery("(min-width: 450px)");

  return (
    <div >
      {isGreaterThan450 ? (
        <div className="fixed w-full bg-black z-50">
          <div className={`${styles.navbarContainer} container mx-auto py-4 px-4 flex justify-center items-center`}>

            <ScrollLink className={`link`} to="homepage" smooth={false} duration={100} offset={-80}>
                <div className={`${lato.className} ${styles.linkText} text-white font-light pr-10 pl-10 hover:text-customYellow`}>
                    Homepage
                </div>
            </ScrollLink>
           
            <ScrollLink className={`link`} to="about" smooth={true} duration={100} offset={-80}>
                <div className={`${lato.className} ${styles.linkText} text-white font-light pr-10 pl-10 hover:text-customYellow`}>
                    About
                </div>
            </ScrollLink> 
            <ScrollLink className={`link`} to="projects" smooth={false} duration={100} offset={-80}>
                <div className={`${lato.className} ${styles.linkText} text-white font-light pr-10 pl-10 hover:text-customYellow`}>
                    Projects
                </div>
            </ScrollLink>
            <ScrollLink className={`link`} to="contact" smooth={true} duration={100} offset={-80}>
                <div className={`${lato.className} ${styles.linkText} text-white font-light pr-10 pl-10 hover:text-customYellow`}>
                    Contact
                </div>
            </ScrollLink>        
          </div>
        </div>
      ) : ( 
        <Box position={"fixed"} bottom={0} zIndex={10} width={"100%"}>
          <MobileMenu></MobileMenu>
        </Box>
       ) }
    </div>
  );
};