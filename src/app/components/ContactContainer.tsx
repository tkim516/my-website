import { Box, Text, Textarea, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { lato } from "../ui/fonts";
import styles from "../styles/defaultButton.module.css"
import pageStyles from "../styles/contact.module.css";

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
      className={`${pageStyles.bodyContainer} ${lato.className}`}
    >
        <Box className={pageStyles.textInputContainer}>
          <Text mb={"10px"} fontSize={"20px"}>
            Message
          </Text>
          <Textarea
            value={message}
            onChange={handleMessageChange}
            placeholder={"Leave a message"}
            color={"white"}
            borderRadius={"5px"}
            height={["200px","100px"]}
            width={"100%"}
            textIndent={"5px"}
          ></Textarea>
          <Text mt={"20px"} mb={"10px"} fontSize={"20px"}>
            Your Info
          </Text>
          <Box
            className={`${pageStyles.submitterInfoContainer} ${lato.className}`}
          >
            <Box className={pageStyles.nameInputContainer}>
              <Input
              placeholder={"First name"}
              borderRadius={"5px"}
              height={"30px"}
              width={["40%","40%"]}
              textIndent={"5px"}
              value={firstName}
              onChange={handleFirstNameChange}>
              </Input>
              <Input
                placeholder={"Last name"}
                borderRadius={"5px"}
                height={"30px"}
                width={["40%","40%"]}
                ml={["30px","90px"]}
                textIndent={"5px"}
                value={lastName}
                onChange={handleLastNameChange}>
              </Input>
            </Box>
            <Box className={pageStyles.emailInputContainer}>
              <Input
                placeholder={"Email"}
                borderRadius={"5px"}
                height={"30px"}
                width={["60%","100%"]}
                ml={["0px","90px"]}
                textIndent={"5px"}
                value={email}
                onChange={handleEmailChange}>
              </Input>
            </Box>
          </Box>
        </Box>
        <Box className={pageStyles.submitButtonContainer}>
          <button className={styles.defaultButton} onClick={(e:any) => handleSubmitMessage(e)}>
            Submit
          </button>
        </Box>
      </Box>
  );
}

