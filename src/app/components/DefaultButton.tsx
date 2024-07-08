import {
    Box,
    Text,
    Textarea,
    Input,
    Button
  } from "@chakra-ui/react";
import React from "react";
import { lato } from "../ui/fonts";

interface ButtonProps {
    text: string;
    onClick: () => void;
}


export default function DefaultButton({ text, onClick }: ButtonProps) {
    return (
        <Box 
          bg={"#C39800"}
          padding={["4px 20px 4px 20px"]} 
          width={"120px"} 
          height={"40px"} 
          alignContent={"center"} 
          textAlign={"center"} 
          borderRadius={"5px"}
          _hover={{ bg: "#A17D00"}}>
          <button onClick={onClick}>
            <Text color={"black"} className={lato.className} fontWeight={"bold"} fontSize={"16px"}>
              {text}
            </Text>      
          </button>
        </Box>
    )
}