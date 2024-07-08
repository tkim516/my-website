"use client";
import Navlink from "../components/Navbar";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { lusitana, playfair, lato } from "../ui/fonts";
import ContactContainer from "../components/ContactContainer";

export default function Page() {
  return (
    <Box bg={"black"} height={"100vh"}>
      <Navlink></Navlink>
      <Box>
        <Text
          color={"white"}
          mt={"20px"}
          ml={"180px"}
          fontSize={"30px"}
          className={lusitana.className}
        >
          Contact
        </Text>
        <Box bg={"white"} height={"1px"} width={"320px"} ml={"160px"}></Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <ContactContainer></ContactContainer>
      </Box>
    </Box>
  );
}
