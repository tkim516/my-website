import { Box, Text, Textarea, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { lato } from "../ui/fonts";
import styles from "../styles/defaultButton.module.css"

export default function ContactContainer() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [success, setSuccess] = useState(false);
  const toast = useToast();

  const handleFirstNameChange = (e: any) => setFirstName(e.target.value);
  const handleLastNameChange = (e: any) => setLastName(e.target.value);
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handleMessageChange = (e: any) => setMessage(e.target.value);

  const handleSubmitMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      (!firstName || !lastName || !email || !message) 
      || 
      (firstName === "" || lastName === "" || email === "" || message === "" )
    ) {
      toast({
        title: "Error",
        description: "All fields must be filled",
        status: "error",
        duration: 2500,
        isClosable: true
      })
      return;
    }
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, message })
      });

      if (!res.ok) {
        alert("Failed to send message. Please try again.");
        toast({
          title: "Error",
          description: "All fields must be filled",
          status: "error",
          duration: 2500,
          isClosable: true
        })
        return;
      }

      const data = await res.json();
      toast({
        title: "Success",
        description: "Message sent!",
        status: "success",
        duration: 2500,
        isClosable: true
      })
      
      if (data.success) {
        setSuccess(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      }
        
    } catch (error) {
      console.error("Failed to send message", error);
      toast({
        title: "Error",
        description: "Failed to send message",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    }
  }

  return (
    <Box
      bg={"#272727"}
      color={"white"}
      width={"75%"}
      height={"100%"}
      borderRadius={"40px"}
      mt={"50px"}
      className={lato.className}
    >
      <Box
        display={"flex"}
        mt={"30px"}
        mb={"50px"}
        ml={"50px"}
        mr={"50px"}
        flexDirection={"column"}
      >
        <Box>
          <Text mb={"10px"} fontSize={"20px"}>
            Message
          </Text>
          <Textarea
            value={message}
            onChange={handleMessageChange}
            placeholder={"Leave a message"}
            color={"white"}
            borderRadius={"5px"}
            height={"100px"}
            width={"100%"}
            textIndent={"5px"}
          ></Textarea>
          <Text mt={"20px"} mb={"10px"} fontSize={"20px"}>
            Your Info
          </Text>
          <Box
            display={"flex"}
            flexDirection={"row"}
            color={"white"}
            className={lato.className}
          >
            <Input
              placeholder={"First name"}
              borderRadius={"5px"}
              height={"30px"}
              width={"20%"}
              textIndent={"5px"}
              value={firstName}
              onChange={handleFirstNameChange}
            ></Input>
            <Input
              placeholder={"Last name"}
              borderRadius={"5px"}
              height={"30px"}
              width={"20%"}
              ml={"50px"}
              textIndent={"5px"}
              value={lastName}
              onChange={handleLastNameChange}
            ></Input>
            <Input
              placeholder={"Email"}
              borderRadius={"5px"}
              height={"30px"}
              width={"30%"}
              ml={"50px"}
              textIndent={"5px"}
              value={email}
              onChange={handleEmailChange}
            ></Input>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"right"} mt={"50px"}>
          <button className={styles.defaultButton} onClick={(e:any) => handleSubmitMessage(e)}>
            Submit
          </button>
        </Box>
      </Box>
    </Box>
  );
}

