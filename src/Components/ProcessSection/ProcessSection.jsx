import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Icon,
  Badge,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaMedal, FaChartLine, FaRocket, FaClock } from "react-icons/fa";
import Process from "../../Media/Process.png";

function ProcessSection() {
  return (
    <>
      <Box
        mt={{ base: 4, md: 6 }}
        p={{ base: 4, md: 6, lg:0}}
        style={{ paddingBottom: 0 }}
        // border='1px solid green'
      >
        <Grid
        
          templateColumns={{ base: "1fr", md: "1fr 1fr" }} // Stack columns on small screens, two columns on medium and up
          gap={{ base: 4, md: 6, lg: 2 }}
          alignItems="center"
          // border={"1px solid black"}
        >
          {/* Left Side - Image */}
          <GridItem  height="100%" mr={2}>
            <Image
              src={Process}
              alt="Man with Laptop"
              borderRadius="md"
              width="100%"
              height={{ base: "auto", md: "100%" }}
              objectFit="cover"
            />
          </GridItem>

          {/* Right Side - Process Steps */}
          <GridItem>
            <Box>
              {/* Section Header */}
              <Badge
                colorScheme="blue"
                variant="outline"
                fontSize={{ base: "0.6em", md: "0.8em" }}
                mb={{ base: 2, md: 4 }}
                borderRadius={14}
                p={2}
              >
                WHAT WE OFFER
              </Badge>
              <Heading
                as="h2"
                size={{ base: "md", md: "lg" }}
                mb={{ base: 3, md: 4 }}
              >
                Some Easy Steps To Process!
              </Heading>

              {/* Step 1 */}
              <Box mb={{ base: 4, md: 6 }} display="flex" alignItems="center">
                <Icon
                  as={FaMedal}
                  w={{ base: 8, md: 10 }}
                  h={{ base: 8, md: 10 }}
                  color="blue.500"
                  mr={{ base: 3, md: 4 }}
                />
                <Box>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                    Some easy steps to process!
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }}>
                    Let’s have a look at our hiring models.
                  </Text>
                </Box>
              </Box>

              {/* Step 2 */}
              <Box mb={{ base: 4, md: 6 }} display="flex" alignItems="center">
                <Icon
                  as={FaChartLine}
                  w={{ base: 8, md: 10 }}
                  h={{ base: 8, md: 10 }}
                  color="blue.500"
                  mr={{ base: 3, md: 4 }}
                />
                <Box>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                    Dedicated Resource Engagement (DRE)
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }}>
                    A Dedicated Resource model is a relationship where the Smile
                    Softcom will provide resources to you full time and you have
                    to pay for them on a per month basis.
                  </Text>
                </Box>
              </Box>

              {/* Step 3 */}
              <Box mb={{ base: 4, md: 6 }} display="flex" alignItems="center">
                <Icon
                  as={FaRocket}
                  w={{ base: 8, md: 10 }}
                  h={{ base: 8, md: 10 }}
                  color="blue.500"
                  mr={{ base: 3, md: 4 }}
                />
                <Box>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                    Fixed Price Model
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }}>
                    A Fixed Price model occurs when you provide detailed project
                    spec and Unis Technosoft commit to complete it for a fixed
                    price.
                  </Text>
                </Box>
              </Box>

              {/* Step 4 */}
              <Box mb={{ base: 4, md: 6 }} display="flex" alignItems="center">
                <Icon
                  as={FaClock}
                  w={{ base: 8, md: 10 }}
                  h={{ base: 8, md: 10 }}
                  color="blue.500"
                  mr={{ base: 3, md: 4 }}
                />
                <Box>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                    Time & Material/Hourly Price Model
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }}>
                    The Time & Material model works best for projects where
                    scope, requirements, and specifications are frequently
                    changing.
                  </Text>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box
        bg="gray.900"
        color="white"
        minH="12vh"
        py={10}
        px={6}
        position="relative"
        overflow="hidden"
        barder="5px solid red"
      >
        {/* Background Shape */}
        <Box
          position="absolute"
          top="0"
          right="0"
          w="50%"
          h="100%"
          bg="orange.500"
          clipPath="polygon(60% 0%, 100% 0%, 100% 100%, 30% 100%)"
          zIndex="-1"
        />

        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          maxW="1200px"
          mx="auto"
        >
          <Box textAlign={{ base: "center", md: "left" }} maxW="600px">
            <Heading as="h1" size="lg" mb={4} lineHeight="1.2">
              Looking for a Web Services Firm?
            </Heading>
            <Text fontSize="sm" mb={6}>
              We welcome and celebrate different perspectives to help our firm,
              our clients, and our people.
            </Text>
          </Box>
          <Button
            colorScheme="blue"
            size="lg"
            mt={{ base: 4, md: 0 }}
            alignSelf={{ base: "center", md: "flex-start" }}
          >
            Get in Touch
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default ProcessSection;

// src/App.js
