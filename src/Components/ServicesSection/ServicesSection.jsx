import React from 'react';
import { Box, Flex, Text, Icon, Stack } from '@chakra-ui/react';
import { FaLaptopCode, FaJava, FaDotCircle, FaCheckCircle, FaChartBar, FaDatabase } from 'react-icons/fa';

const services = [
  {
    icon: FaLaptopCode,
    title: 'Web & Graphic Designing',
    description: 'At Smile Softcom, we have developed an adaptive',
  },
  {
    icon: FaJava,
    title: 'Java Development',
    description: 'Smile Softcom is renowned as a Java development service provider that offers',
  },
  {
    icon: FaDotCircle,
    title: '.Net Development',
    description: 'Individual approach to delivering cost-effective.',
  },
  {
    icon: FaCheckCircle,
    title: 'Testing',
    description: 'Software Quality Assurance has become extremely important as part of Software',
  },
  {
    icon: FaChartBar,
    title: 'Digital Marketing Principles',
    description: 'The initiate principle of digital marketing states...',
  },
  {
    icon: FaDatabase,
    title: 'Data Analysis',
    description: 'Data analysis is a process of inspecting, cleansing, transforming, and modelling',
  },
];

const ServicesSection = () => {
  return (
    <Box py={10} px={5} bg="gray.50">
      <Stack spacing={4} align="center" textAlign="center" mb={12}>
        <Text fontSize="sm" fontWeight="bold" color="blue.500" textTransform="uppercase" mb={2}>
          Our Featured Services
        </Text>
        <Text fontSize={{ base: '2xl', md: '2xl' }} fontWeight="bold">
          We provide some exclusive services for clients
        </Text>
        <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" maxW="600px">
          We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.
        </Text>
      </Stack>
      <Flex justifyContent="center" flexWrap="wrap" gridGap={8}>
        {services.map((service, index) => (
          <Box
            key={index}
            p={6}
            borderWidth={1}
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
            maxW="sm"
            flex="1"
            minW="280px"
            bg="white"
          >
            <Icon as={service.icon} boxSize={10} color="blue.500" mb={4} />
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {service.title}
            </Text>
            <Text fontSize="md" color="gray.600">
              {service.description}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ServicesSection;
