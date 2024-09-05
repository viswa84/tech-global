import React from "react";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

import App from "../../Media/App.png";
import Cloud from "../../Media/Cloud.png";
import web from "../../Media/web.png";
import DevOps from "../../Media/DevOps.jpg";

const cards = [
  {
    icon: "📱",
    title: "Mobile App Development",
    description: "Build powerful mobile experiences.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description: "Growth, focus & analysis.",
  },
  {
    icon: "🎯",
    title: "DevOps",
    description: "Strategy is the foundation.",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    description: "Professional skilled team.",
  },
];

const Cards = () => {
  return (
    <Box border="12px solid black">
      nbnhghfhfhfhfhfh
      jhdjgjggjhsdjhgjsgjgjsdgjdjg
      hgjhgjhjgjdgjhgdjgjd ggaaghggagllhsglaagrey itrtiirt
      
      <Flex
      // border="2px solid green"
        position="absolute"
        bottom="-50px" // Adjust as needed to overlap with the slider
        width="100%"
        justifyContent="space-around"
        zIndex="2"
        p={10}
        mb={4}
        mt={{ base: 2, md: 2, lg: 0 }}
        direction={{ base: "column", md: "row", lg: "row" }}
      >
        <Box
          background="white"
          p={6}
          borderRadius="md"
          boxShadow="lg"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Image src={App} width="60px" height="60px" objectFit="contain" />
          <Text mt={4} fontWeight="bold">
            Mobile App Development
          </Text>
          {/* <Text fontSize="sm">Build powerful mobile applications.</Text> */}
        </Box>

        <Box
          background="white"
          p={6}
          borderRadius="md"
          boxShadow="lg"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Image src={web} width="60px" height="60px" objectFit="contain" />
          <Text mt={4} fontWeight="bold">
            Web Development
          </Text>
          <Text fontSize="sm">Growth, focus & analysis.</Text>
        </Box>

        <Box
          background="white"
          p={6}
          borderRadius="md"
          boxShadow="lg"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Image src={DevOps} width="60px" height="60px" objectFit="contain" />
          <Text mt={4} fontWeight="bold">
            DevOps
          </Text>
          <Text fontSize="sm">Strategy is the foundation.</Text>
        </Box>

        <Box
          background="white"
          p={6}
          borderRadius="md"
          boxShadow="lg"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Image src={Cloud} width="60px" height="60px" objectFit="contain" />
          <Text mt={4} fontWeight="bold">
            Cloud Computing
          </Text>
          <Text fontSize="sm">Professional skilled team.</Text>
          
        </Box>
      </Flex>
    </Box>
  );
};

export default Cards;
