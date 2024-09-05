import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  VStack,
  Image,
} from "@chakra-ui/react";
import group from "../../Media/group.jpg";

const MainPrinciples = () => {
  return (
    <Box bg="gray.900">
      <Flex
        direction={{ base: "column", lg: "row" }}
        p={{ base: 4, lg: 8 }}
        color="white"
        align="center"
      >
        {/* Left Section */}
        <VStack
          align="flex-start"
          spacing={6}
          w={{ base: "full", lg: "50%" }}
          p={{ base: 4, lg: 8 }}
        >
          <Box>
            <Button
              size="sm"
              colorScheme="blue"
              variant="outline"
              borderRadius="full"
              mb={2}
            >
              MAIN PRINCIPLES
            </Button>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} mb={4}>
              Global Reach with Local Understanding
            </Heading>
          </Box>

          {/* Blue Button Section */}
          <Button
            w="full"
            bg="blue.500"
            color="white"
            justifyContent="space-between"
            rightIcon={<Text fontSize="xl">↑</Text>}
            _hover={{ bg: "blue.600" }}
            _active={{ bg: "blue.700" }}
          >
            Exceptional Client Service
          </Button>

          {/* Text Description */}
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.300">
            In healthy companies, changing directions or launching new projects
            means combining underlying strengths and capacities with new energy
            and support.
          </Text>

          {/* Action Links */}
          <VStack spacing={4} w="full">
            <Button
              w="full"
              bg="gray.700"
              justifyContent="space-between"
              rightIcon={<Text fontSize="xl">→</Text>}
              _hover={{ bg: "gray.600" }}
              _active={{ bg: "gray.700" }}
            >
              A Great Team and Winning Culture
            </Button>
            <Button
              w="full"
              bg="gray.700"
              justifyContent="space-between"
              rightIcon={<Text fontSize="xl">→</Text>}
              _hover={{ bg: "gray.600" }}
              _active={{ bg: "gray.700" }}
            >
              A Commitment to Integrity, Fairness
            </Button>
          </VStack>
        </VStack>

        {/* Right Section */}
        <Box
          w={{ base: "full", lg: "50%" }}
          h={{ base: "auto", md: "400px", lg: "500px" }} // Adjust height for better aspect ratio
          mt={{ base: 6, lg: 0 }}
          overflow="hidden"
          borderRadius="lg"
        >
          <Image
            src={group}
            objectFit="cover" // Ensures the image covers the container completely
            w="100%"
            h="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainPrinciples;
