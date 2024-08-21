import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  IconButton,
  Text,
  Button,
  Flex,
  Badge,
  keyframes,
} from "@chakra-ui/react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import first from "../../Media/first.png";
import second from "../../Media/second.png";
import third from "../../Media/third.png";

const slides = [
  {
    background: `url(${third}) no-repeat center/cover`,
    heading: "Strategic Growth Planning",
    text: "Our strategies are tailored to drive sustainable growth and success.",
  },
  {
    background: `url(${first}) no-repeat center/cover`,
    heading: "We Deliver Digital Strategy",
    text: "We are a boutique firm designed for Private Equity, Family Offices, and Growth-Stage Companies seeking to maximize results.",
  },
  {
    background: `url(${second}) no-repeat center/cover`,
    heading: "",
    text: "",
  },
];

// Keyframes for the rising effect
const riseUp = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playAnimation, setPlayAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setPlayAnimation(false);
      setTimeout(() => setPlayAnimation(true), 10); // Reset the animation
    }, 5000); // Changes slide every second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentSlide]);

  const changeSlide = (index) => {
    setCurrentSlide(index);
    setPlayAnimation(false);
    setTimeout(() => setPlayAnimation(true), 10); // Reset the animation
  };

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <Box
        background={slides[currentSlide].background}
        height="100%"
        width="100%"
        position="absolute"
        top="0"
        left="0"
        transition="background 0.3s ease-in-out"
      />

      {slides[currentSlide].heading && (
        <Flex
          position="relative"
          zIndex="2"
          color="white"
          p={10}
          flexDirection="column"
          maxW="50%"
          ml={10}
          animation={playAnimation ? `${riseUp} 1s ease-in-out` : "none"} // Apply rising effect conditionally
        >
          <Flex
            alignItems="center"
            mb={4}
            border="1px solid #ffffff90"
            borderRadius="full"
            px={4}
            py={2}
            bg="rgba(0, 0, 0, 0.4)"
            display="inline-flex"
          >
            <Badge
              colorScheme="orange"
              borderRadius="full"
              px={2}
              py={1}
              mr={3}
            >
              Welcome
            </Badge>
            <Text fontSize="md" fontFamily="'Roboto', sans-serif">
              innovation in business starts here
            </Text>
          </Flex>
          <Text
            fontSize="5xl" // Adjusting to match the image size
            fontWeight="bold"
            lineHeight="shorter"
            fontFamily="'Roboto', sans-serif" // Use Roboto font-family as per the image
          >
            {slides[currentSlide].heading}
          </Text>
          <Text
            fontSize="xl" // Slightly larger than "lg" for more emphasis
            mt={4}
            mb={8}
            fontFamily="'Roboto', sans-serif"
          >
            {slides[currentSlide].text}
          </Text>
          <Flex gap={4}>
            <Button colorScheme="orange" fontFamily="'Roboto', sans-serif">
              Explore More
            </Button>
            <Button
              colorScheme="whiteAlpha"
              variant="outline"
              fontFamily="'Roboto', sans-serif"
            >
              Get in Touch
            </Button>
          </Flex>
        </Flex>
      )}

      <Stack
        position="absolute"
        left="20px"
        top="50%"
        transform="translateY(-50%)"
        spacing={4}
      >
        {slides.map((_, index) => (
          <IconButton
            key={index}
            icon={index === currentSlide ? <FaCircle /> : <FaRegCircle />}
            size="sm"
            colorScheme="whiteAlpha"
            onClick={() => changeSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Slideshow;
