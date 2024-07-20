import {
    Box,
    Text,
    Flex,
    Button,
    Image
  } from "@chakra-ui/react";
import { montserrat, lato, lusitana } from '../ui/fonts'
import styles from "../styles/projects.module.css";

export default function ProjectContainer() {
    
    const titleText = "Volunteer and Event Management Platform";
    const bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
    // need to set image 

    return(
        <Box
          className={styles.bodyContainer}> {/* black background and white text*/}
          <Box 
            className={`${styles.titleContainer} ${lusitana.className}`}
            >
            <Text className={styles.titleText}>
                {titleText}
            </Text>
          </Box>
          <Box className={styles.imageContainer} display={"flex"} justifyContent={"center"} mt={"50px"}>            
            <Box color={"white"} border={"1px solid"} width={"auto"} borderRadius={"5px"}>
              <Image
              src="/beaver-brigade-desktop.png"
              alt="Image of application"
              width={["280px", "600px"]}
              //height={"600px"}
              borderRadius={"5px 5px 2.5px 2.5px"}            
              />
            </Box>
            {/* leave out for now
            <Box>
              <Image
                src="/admin-dashboard.png"
                alt="Image of application"
                width={"500"}
                height={"500"}
              />
            </Box>
            <Box>
              <Image
                src="/volunteer-log.png"
                alt="Image of application"
                width={"500"}
                height={"500"}
              />
            </Box>
            */}
          </Box>
          <Box 
            className={`${styles.bodyTextContainer} ${lato.className}`}
            >
            <Text className={styles.bodyText}>
                {bodyText}
            </Text>
          </Box>
        </Box>
    )
};

