"use client";
import ProjectContainer from "../components/ProjectContainer";
import Navlink from "../components/Navbar";
import { Box, Text, Flex, Button, useBreakpointValue } from "@chakra-ui/react";
import { lusitana, playfair, lato, montserrat } from "../ui/fonts";

export default function Page() {
  return (
    <Box bg={"black"} height={"100%"}>
      <Navlink></Navlink>
      <Box>
        <Text
          color={"white"}
          mt={"20px"}
          ml={"180px"}
          fontSize={"30px"}
          className={lusitana.className}
        >
          Featured projects
        </Text>
        <Box bg={"white"} height={"1px"} width={"320px"} ml={"160px"}></Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <ProjectContainer></ProjectContainer>
      </Box>
    </Box>
  );
}
