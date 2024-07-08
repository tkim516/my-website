import {
    Box,
    Text,
    Flex,
    Button,
    Image
  } from "@chakra-ui/react";
import { montserrat, lato, lusitana } from '../ui/fonts'

export default function ProjectContainer() {
    
    const titleText = "Volunteer and Event Management Platform";
    const bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
    // need to set image 

    return(
        <Box 
          bg={"#272727"} 
          color={"white"} 
          width={"75%"} 
          height={"750px"}
          borderRadius={"40px"} 
          mt={"50px"}
          mb={"50px"} 
        > {/* black background and white text*/}
          <Box 
            className={lusitana.className}
            display={"flex"}
            justifyContent={"center"}
            fontSize={"30px"}
            mt={"50px"}
            >
            <Text >
                {titleText}
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"center"} mt={"50px"}>            
            <Box color={"white"} border={"1px solid"} width={"auto"} borderRadius={"5px"}>
              <Image
              src="/beaver-brigade-desktop.png"
              alt="Image of application"
              width={"600px"}
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
            className={lato.className}
            display={"flex"}
            justifyContent={"left"}
            ml={"50px"}
            mr={"50px"}
            mt={"50px"}
            >
            <Text>
                {bodyText}
            </Text>
          </Box>
        </Box>
    )
};

