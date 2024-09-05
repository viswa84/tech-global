import React from "react";
import AboutCompanyImage from "../../Media/AboutSoftCom.png";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

const AboutCompany = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }} // Column for base and md, row for lg and above
        align="center"
        justify="space-between"
        p={8}
        bg="gray.50"
      >
        {/* Image Section */}
        <Box
          maxWidth={{ base: "100%", md: "55%", lg: "55%" }} // Keeps the image section size consistent
          mr={{ lg: 8 }} // Apply margin only for large screens
          mb={{ base: 8, md: 8, lg: 0 }} // Add bottom margin for small and medium screens
          // border='1px solid blue'
        >
          <Image
            src={AboutCompanyImage}
            alt="Person working on a laptop"
            borderRadius="md"
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </Box>

        {/* Text Section */}
        <Box
          // Decrease flex value to make the text section smaller
          // border="1px solid green"
          width={{ base: "100%", md: "55%", lg: "45%" }} // Full width for small and medium screens
        >
          <Button
            borderColor={"#004AAD"}
            border={"1px solid #004AAD"}
            size="sm"
            mb={4}
            variant="solid"
            borderRadius="full" // Make button rounded
          >
            <Text color="#004AAD" fontSize={"10px"}>
              ABOUT COMPONEY
            </Text>
          </Button>
          <Heading
            as="h2"
            fontSize={{ base: "20px", md: "25px", lg: "28px" }} // Increase font size for heading
            fontWeight="650"
            lineHeight="34px"
            fontStyle="normal"
            mb={4}
          >
            Smile Softcom <br />
            The Best IT Service <br />
            Company in the City.
          </Heading>
          <Text fontSize="sm" mb={6} color={"rgb(95, 95, 95)"}>
            Smile Softcom Private Limited is a business pioneer in providing
            innovative, rich, and highly effective Business, Technology &
            communication solutions to meet the Business, IT & Marketing
            requirements of our clients. Our solutions have succeeded in gaining
            the attention of some well-known National and International
            companies. At Smile Softcom, we put special attention on the balance
            between Business & Technology side by side to recreate and innovate
            effective profit-targeted solutions catering to our client’s
            business requirements.
          </Text>
          {/* <Button colorScheme="blue" size="md">
          Find out more
        </Button> */}
          <Button
            bg="#004AAD" // Set the background color directly
            color="white" // Set text color to white
            size="md"
            _hover={{ bg: "#003680" }} // Optional: Define hover state
            fontSize={"12px"}
          >
            EXPLORE MORE
          </Button>
        </Box>
      </Flex>
    
    </>
  );
};

export default AboutCompany;
