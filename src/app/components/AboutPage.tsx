import Navlink from "./Navbar";
import { Box, Text } from "@chakra-ui/react";
import { lusitana, lato } from "../ui/fonts";
import BioContainer from "./BioContainer";
import styles from "../styles/defaultTitle.module.css";
import pageStyles from "../styles/about.module.css";

export default function AboutPage() {
  return (
    <Box>
      <Box className={pageStyles.pageContainer}>
        <Box>
          <Text
            color={"white"}
            mt={"20px"}
            ml={["40px","180px"]}
            fontSize={"30px"}
            className={`${lusitana.className} ${pageStyles.headingText}`}
          >
            About me
          </Text>
          <Box bg={"white"} height={"1px"} width={["0px","200px"]} ml={"160px"}></Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <BioContainer></BioContainer>
        </Box>
      </Box>
    </Box>
  );
}
