"use client";
import Navlink from "./Navbar";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { lusitana, playfair, lato } from "../ui/fonts";
import ContactContainer from "../components/ContactContainer";
import styles from "../styles/defaultButton.module.css";

export default function ContactPage() {
  return (
    <Box bg={"black"} height={"100vh"}>
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
        <Box bg={"white"} height={"1px"} width={"200px"} ml={"160px"}></Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <ContactContainer></ContactContainer>
      </Box>
    </Box>
  );
}
