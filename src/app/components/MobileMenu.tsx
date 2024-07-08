"use client"
import { Box, Text, Stack, Flex } from "@chakra-ui/react";
import Link from 'next/link';
import { montserrat, lusitana, playfair, lato } from '../ui/fonts';
import { usePathname } from 'next/navigation';
import { AiFillProduct, AiFillHome, AiFillMessage } from "react-icons/ai";
 
export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <Box 
      bg={"black"} 
      display={"flex"} 
      flexDirection={"row"} 
      zIndex={10}
      className={lato.className} 
      color={"white"}
      justifyContent={"space-around"}
      padding={"10px 20px 10px 20px"}>
      <Box display={"flex"} flexDirection={"column"} padding={"10px"}>
        <Link href="/">        
          <AiFillHome size="50px"/>
          <Text textAlign={"center"}> Home</Text>
        </Link>
      </Box>
      <Box display={"flex"} flexDirection={"column"} padding={"10px"}> 
        <Link href="/projects">
          <AiFillProduct size={"50px"}/>
          <Text textAlign={"center"}>Projects</Text>
        </Link>
      </Box>
      <Box display={"flex"} flexDirection={"column"} padding={"10px"}>  
        <Link href="/contact">     
          <AiFillMessage size={"50px"}/> 
          <Text>Contact</Text>
        </Link>
      </Box>
    </Box>
  );
}