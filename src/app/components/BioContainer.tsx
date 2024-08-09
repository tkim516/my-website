"use client"
import {
    Box,
    Text,
    Flex,
    Link
    } from "@chakra-ui/react";
import Image from "next/image";
import { montserrat, lato, lusitana } from '../ui/fonts'
import styles from "../styles/defaultButton.module.css";
import pageStyles from "../styles/about.module.css"

export default function BioContainer() {
    
    const bodyText = `I currently volunteer as the Director of Product and as a Software Engineer at Hack4Impact, where I lead teams to build custom software solutions for nonprofits.
    
                      This summer, I am interning as a Product Manager at Hewlett Packard Enterprise. I previously interned as a Product Manager at Productiv, a SaaS company that integrates data from IT, procurement, and finance to empower business leaders to make well-informed decisions. 
                      
                      As an undergraduate at Cal Poly, I spent a year working at the Center for Leadership, where I facilitated workshops on personal and organizational leadership.` 
    
    const bodyText2 = `I am passionate about product management, programming, and UX design.
                       
                      In my free time, I enjoy playing basketball, golf, and poker, as well as programming and reading.`
    return(
          <Box className={pageStyles.bodyContainer}>            
            <Box className={pageStyles.profileImageContainer}>
              <Image
              src="/grand-portage.jpg"
              alt="Image of application"
              width={1000}
              height={600}
              //sizes="100px"
              //borderRadius={"20px"}
              className={pageStyles.profileImage}/>
            </Box>
            <Box 
              className={`${lato.className} ${pageStyles.textContainer}`}>
              <Box className={pageStyles.bodyText} >
                <Box>
                  <Box fontSize={"26px"} className={lusitana.className}>
                    Experience
                  </Box>
                  <Box whiteSpace={"pre-line"} mt={"10px"}>{bodyText}</Box>                  
                </Box>
                <Box>
                  <Box fontSize={"26px"} mt={"30px"} className={lusitana.className}>
                    Interests
                  </Box>
                  <Box whiteSpace={"pre-line"} mt={"10px"}>{bodyText2}</Box>
                </Box>         
              </Box>
              <Box className={pageStyles.buttonContainer}>
                <a href="/Tyler-Kim-Resume.pdf" download>
                  <button className={styles.defaultButton}>
                    My resume
                  </button>
                </a>
              </Box>
            </Box>
          </Box>  
    )
};

