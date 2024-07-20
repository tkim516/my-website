"use client";
import ProjectContainer from "../components/ProjectContainer";
import Navlink from "./Navbar";
import { Box, Text, Flex, Button, useBreakpointValue } from "@chakra-ui/react";
import { lusitana, playfair, lato, montserrat } from "../ui/fonts";

export default function ProjectsPage() {
  return (
    <Box bg={"black"} height={"100%"}>
      <Box>
        <Text
          color={"white"}
          mt={"20px"}
          ml={["40px","180px"]}          
          fontSize={"30px"}
          className={lusitana.className}
        >
          Projects
        </Text>
        <Box bg={"white"} height={"1px"} width={["0px","200px"]} ml={"160px"}></Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <ProjectContainer></ProjectContainer>
      </Box>
    </Box>
  );
}
