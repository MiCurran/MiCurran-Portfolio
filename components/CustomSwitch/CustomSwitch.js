import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { useColorMode, useColorModeValue, Box } from "@chakra-ui/react";
const MotionBox = motion(Box)
import { FaSun, FaMoon } from "react-icons/fa";

export default function CustomSwitch() {
  const [isOn, setIsOn] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleSwitch = () => {
   toggleColorMode();
    setIsOn(!isOn);
  }

  return (
    <Box
        m={4}
        bgColor={useColorModeValue('gray.200', 'gray.700')}
        className={styles.switch} data-ison={isOn} onClick={() => toggleSwitch()}>
        {colorMode === 'light'
            ? (<FaSun color={'orange'} className={styles.handle} layout={true} transition={spring} 
                
            />)
            : <FaMoon color={'yellow'} className={styles.handle} layout={true} transition={spring} />
        
        }
    </Box>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};