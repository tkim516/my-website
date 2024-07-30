import {
    Box,
    Text,
    Flex,
    Button,
    Image,
    Link
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
            <Text className={lusitana.className} fontSize={"24px"} mb={"10px"}>
              Description
            </Text>
            <Text className={styles.bodyText}>
              I led and managed a team of 16 developers and designers to build an event and volunteer management platform for the SLO Beaver Brigade. 
              You can check out the live application&nbsp;
              <a href="https://slo-beaver-brigade-livid.vercel.app/" className={"text-customYellow underline"}>
                here
              </a>
              !
            </Text>
            {/* Commenting out Features text for now
            <Text className={lusitana.className} fontSize={"24px"} mt={"30px"} mb={"10px"}>
              Features
            </Text>
            <div className={styles.featureList} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyItems: "left", alignItems: "center" }}>
              <div>Automated volunteer hour tracking</div>
              <div>Digital waiver that reduced paperwork</div>
              <div>Volunteering groups and invite-only events</div>
              <div>Seamless event registration process</div>
              <div>Dashboard for event management</div>
              <div>Automated emailing for upcoming events</div>   
              <div>Calendar that syncs to Google and Outlook</div>
              <div>Mailchimp newsletter integration</div>
            </div>
            */}
          </Box>
        </Box>
    )
};

