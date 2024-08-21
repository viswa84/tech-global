import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import SmileSoftcomLogo from "../../Media/Smile-softcom-Logo.png";
export default function FirstNavbar() {
  return (
    <Box w="100%" p={0} >
      <Flex
        direction={["row", "row", "row", "row"]} // Horizontally aligned on all screen sizes
        wrap="wrap"
      >
        {/* First Box */}
        <Box
        
          p={["1", "3"]}
          flex={["1", "1", "2", "2"]} // Full width on small screens, double width on large screens
          w={["50%", "50%", "auto"]}
        >
          <Image
            src={SmileSoftcomLogo}
            alt="Dan Abramov"
            w={"50%"}
            h={"98%"}
            ml={"10"}
          />
        </Box>

        {/* Second Box */}
        <Box
          p={["2", "4"]}
          flex={["1", "1", "1", "1"]} // Equal width on all screen sizes
          w={["50%", "50%", "auto"]}
          display={["block", "block", "block", "block"]}
        >
          <Flex
            align="center" // Vertically center-align items
            justify="center" // Horizontally center-align items
            //    p={4}
            gap={2}
          >
            <IoCall color="#004AAD" size={20} />

            <Box>
              <Text
              fontSize="xs"
                style={{
                  color: "#656565",
                 
                  lineHeight: "20px",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                Have Any Quetion?
              </Text>
              <Text fontSize="xs" style={{  fontWeight: "500" }}>
                +91 6360 517 320
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Third Box - Hidden on small and medium screens */}
        <Box
          p={["2", "4"]}
          //   bg="blue.400"
          flex={["none", "none", "1", "1"]} // Not displayed on small/medium screens
          w={["none", "none", "auto"]}
          display={["none", "none", "block", "block"]}
        >
          <Flex
            align="center" // Vertically center-align items
            justify="center" // Horizontally center-align items
            //    p={4}
            gap={2}
          >
            <FaLocationDot color="#004AAD" size={20} />

            <Box>
              <Text
              fontSize="xs"
                style={{
                  color: "#656565",
                  
                  lineHeight: "20px",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                Visit Us Daily
              </Text>
              <Text fontSize="xs" style={{ fontWeight: "500" }}>
                Jigani Link Road, Bangalore
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Fourth Box - Hidden on small and medium screens */}
        <Box
          p={["2", "4"]}
          //   bg="yellow.400"
          flex={["none", "none", "1", "1"]} // Not displayed on small/medium screens
          w={["none", "none", "auto"]}
          display={["none", "none", "block", "block"]}
        >
          <Button
            bg={"#FFEADB"}
            size="md"
            border="1px solid"
            borderColor="black"
            borderRadius="sm"
            _hover={{ bg: "blue.600", color: "white", border: "none" }}
            _active={{ bg: "blue.700", color: "white" }}
            pl={6}
            pr={6}
            pt={0}
            style={{ fontSize: "10PX" }}
          >
            ENQUIRE NOW
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
