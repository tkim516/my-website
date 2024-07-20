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
    
    const bodyText = `I’m currently volunteering as a Product Manager for Hack4Impact, where I lead a team of developers and designs to build custom software solutions for nonprofits.\n 
                      You can learn more about my current project here!\n` 
    
    const bodyText2 = `At Cal Poly, I work as a Peer Leader for the Center for Leadership, coaching students about personal and organizational leadership.\n`

    const bodyText3 = `In my free time, you can find me surfing around Santa Cruz or the Central Coast, playing chess or poker with friends, or reading a book at a coffee shop. 
                       I’m currently studying Industrial Engineering and Software Development at Cal Poly, San Luis Obispo.`;           

    return(
          <Box className={pageStyles.bodyContainer}>            
            <Box className={pageStyles.profileImageContainer}>
              <Image
              src="/grand-portage.jpg"
              alt="Image of application"
              width={900}
              height={900}
              //sizes="100px"
              //borderRadius={"20px"}
              className={pageStyles.profileImage}/>
            </Box>
            <Box 
              className={`${lato.className} ${pageStyles.textContainer}`}>
              <Text className={pageStyles.bodyText}>
                {bodyText}
                <br/> <br/>
                {bodyText2}
                <br/> <br/>
                {bodyText3}
              </Text>
              <Box mt={"50px"} className={pageStyles.buttonContainer}>
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

