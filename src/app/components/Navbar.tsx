'use client'
import { Box, Button, useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from "react";
import { montserrat, kodchasan, lato, lusitana } from '../ui/fonts';
import styles from "../styles/navbar.module.css";
import { cursorTo } from "readline";



export default function Navlink() {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const handleHideMobileMenu = () => {
    setShowMobileMenu(false)
  }

  return (
    <div className={`${showMobileMenu && styles.active}`}>
        <div className="fixed w-full bg-black z-50">
          <div className={`
                ${styles.navbarContainer} 
                ${showMobileMenu && styles.active}`}>
            <div className={styles.iconContainer}>
              <div className={`${styles.menuIcon} ${showMobileMenu && styles.active}`} onClick={handleShowMobileMenu}>
                <HamburgerIcon boxSize={6}></HamburgerIcon>
              </div>
              <div className={`${styles.closeIcon} ${showMobileMenu && styles.active}`} onClick={handleHideMobileMenu}>
                <CloseIcon boxSize={6}></CloseIcon>
              </div>
            </div>
              <ScrollLink className={`${styles.linkContainer} link`} to="homepage" smooth={false} duration={100} offset={-80} onClick={handleHideMobileMenu}>
                  <div className={`
                        ${lato.className} 
                        ${styles.linkText} 
                        ${showMobileMenu && styles.active} 
                        text-white font-light pr-10 pl-10 hover:text-customYellow`}>
                      Homepage
                  </div>
              </ScrollLink>
            
              <ScrollLink className={`${styles.linkContainer} link`} to="about" smooth={true} duration={100} offset={-80} onClick={handleHideMobileMenu}>
                  <div className={`
                        ${lato.className} 
                        ${styles.linkText} 
                        ${showMobileMenu && styles.active} 
                        text-white font-light pr-10 pl-10 hover:text-customYellow`}>
                      About
                  </div>
              </ScrollLink> 
              <ScrollLink className={`${styles.linkContainer} link`} to="projects" smooth={false} duration={100} offset={-80} onClick={handleHideMobileMenu}>
                  <div className={`
                        ${lato.className} 
                        ${styles.linkText} 
                        ${showMobileMenu && styles.active} 
                        text-white font-light pr-10 pl-10 hover:text-customYellow`}>
                      Projects
                  </div>
              </ScrollLink>
              <ScrollLink className={`${styles.linkContainer} link`} to="contact" smooth={true} duration={100} offset={-80} onClick={handleHideMobileMenu}>
                  <div className={`
                        ${lato.className} 
                        ${styles.linkText} 
                        ${showMobileMenu && styles.active} 
                        text-white font-light pr-10 pl-10 hover:text-customYellow`}>
                      Contact
                  </div>
              </ScrollLink>               
          </div>
        </div>
    </div>
  );
};