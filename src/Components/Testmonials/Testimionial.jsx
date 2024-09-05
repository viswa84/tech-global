import {
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const testimonials = [
  {
    id: 1,
    name: "Mary Grey",
    role: "Client of Company",
    image: "https://via.placeholder.com/150", // replace with actual image URL
    feedback:
      "“We know a diverse workforce and an inclusive culture matters to our clients. Through philanthropy and employee volunteerism, we support the diverse communities where our employees live.”",
  },
  {
    id: 2,
    name: "Samantha Fox",
    role: "Client of Company",
    image: "https://via.placeholder.com/150", // replace with actual image URL
    feedback:
      "“We know a diverse workforce and an inclusive culture matters to our clients. Through philanthropy and employee volunteerism, we support the diverse communities where our employees live.”",
  },
  {
    id: 3,
    name: "Oliver Simson",
    role: "Client of Company",
    image: "https://via.placeholder.com/150", // replace with actual image URL
    feedback:
      "“We know a diverse workforce and an inclusive culture matters to our clients. Through philanthropy and employee volunteerism, we support the diverse communities where our employees live.”",
  },
];

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = testimonials.length;
  const [testi, setTesti] = useState(testimonials);
  const interval = 1000; // 1 second
  const slidesPerView = useBreakpointValue({ base: 1, md: 1, lg: 3 });

  useEffect(() => {
    const timer = setInterval(() => {
      let arr = [...testi];
      // console.log(arr.pop())
      let temp=arr[0]
      arr[0]=arr[1]
      arr[1]=arr[2]
      arr[2]=temp

      setTesti(arr);
      console.log(arr);
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [testi]);

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    // setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  return (
    <Box maxW="7xl" mx="auto" p={4}>
      <Flex justify="center" mb={4}>
        <Text
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
          color="blue.600"
          mb={2}
        >
          Testimonials
        </Text>
      </Flex>
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        What People Say About Us
      </Heading>
      <Text textAlign="center" maxW="2xl" mx="auto" mb={8}>
        We help you see the world differently, discover opportunities you may
        never have imagined, and achieve results that bridge what is with what
        can be.
      </Text>
      <Flex
        justifyContent="center"
        position="relative"
        border="1px solid green"
      >
        <Flex w="full" overflow="hidden" border="1px solid blue">
          <Flex
            w="full"
            transform={`translateX(-${(100 / slidesPerView) * currentSlide}%)`}
            transition="transform 0.5s ease-in-out"
            direction={{ base: "column", lg: "row" }}
            border="1px solid orange"
          >
            {testi.map((testimonial) => (
              <Box
                key={testimonial.id}
                p={6}
                rounded="md"
                shadow="md"
                mx={4}
                bg="white"
                flexShrink={0}
                minW={{ base: "full", lg: `${100 / slidesPerView}%` }}
                maxW="30%"
              >
                <Text fontSize="lg" mb={4}>
                  {testimonial.feedback}
                </Text>
                <Flex align="center" mt={4}>
                  <Avatar
                    name={testimonial.name}
                    src={testimonial.image}
                    mr={4}
                  />
                  <Box>
                    <Text fontWeight="bold">{testimonial.name}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonial.role}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>

        {/* Navigation buttons */}
        <IconButton
          aria-label="Previous Slide"
          icon={<BiChevronLeft />}
          onClick={prevSlide}
          position="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
          variant="outline"
          colorScheme="blue"
        />
        <IconButton
          aria-label="Next Slide"
          icon={<BiChevronRight />}
          onClick={nextSlide}
          position="absolute"
          top="50%"
          right="0"
          transform="translateY(-50%)"
          variant="outline"
          colorScheme="blue"
        />
      </Flex>
    </Box>
  );
};

export default TestimonialsSlider;




