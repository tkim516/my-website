import Navlink from "../components/Navbar";
import { Box, Text } from "@chakra-ui/react";
import { lusitana, lato } from "../ui/fonts";
import BioContainer from "../components/BioContainer";
import styles from "../styles/defaultTitle.module.css";
import pageStyles from "../styles/about.module.css";

export default function Page() {
  return (
    <Box>
      <Navlink />
      <Box className={pageStyles.pageContainer}>
        <Box>
          <Text className={`${lusitana.className} ${styles.defaultTitle}`}>
            About me
          </Text>
          <Box className={styles.titleUnderline}></Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <BioContainer></BioContainer>
        </Box>
      </Box>
    </Box>
  );
}
