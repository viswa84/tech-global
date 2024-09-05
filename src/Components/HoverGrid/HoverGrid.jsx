// // Import required Chakra UI components
// import { Box, Grid, Text } from '@chakra-ui/react';
// import { useState } from 'react';

// // Import images for the background
// import first from "../../Media/digitalDelivery.jpg";
// import second from "../../Media/NewBuisiness.jpg";
// import third from "../../Media/Partnership.jpg";
// import forth from "../../Media/ClientLearning.jpg";
// import fifth from "../../Media/group.jpg";

// // Define hover effects for each box
// const hoverEffects = {
//   transform: 'scale(1.03)',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   transition: 'transform 0.3s ease, background-color 0.3s ease',
// };

// function HoverGrid() {
//   const [hovered, setHovered] = useState(null); // State to track hovered box index

//   // Array of background images
//   const images = [first, second, third, forth, fifth];

//   // Array of descriptions corresponding to each box
//   const descriptions = [
//     "This is the description for Client Learning Programs. It provides insightful learning opportunities for clients.",
//     "The Partnership Ecosystem focuses on building strong alliances to drive business growth and innovation.",
//     "New Business Innovation fosters creative solutions and strategies for launching new business initiatives.",
//     "Digital Delivery Platform offers efficient, technology-driven solutions for streamlined digital services.",
//     "The fifth box represents a collaborative approach to achieving group objectives and learning."
//   ];

//   // Function to get the background image based on the hovered state
//   const getBackgroundImage = () => {
//     if (hovered === null) return images[0]; // Default to the first image if none are hovered
//     return images[hovered]; // Return the hovered image
//   };

//   return (
//     <Box
//       bgImage={`url(${getBackgroundImage()})`} // Set background image dynamically
//       bgSize="cover"
//       bgPos="center"
//       position="relative"
//       height={{ base: '60vh', md: '80vh', lg: "100vh" }}
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       _hover={hoverEffects}
//     >
//       <Grid
//         templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
//         width="100%"
//         height={"100%"}
//       >
//         {/* Box components */}
//         {['Client Learning Programs', 'Partnership Ecosystem', 'New Business Innovation', 'Digital Delivery Platform', 'Fifth Box'].map((title, index) => (
//           <Box
//             key={index}
//             position="relative"
//             onMouseEnter={() => setHovered(index)} // Set hovered index on mouse enter
//             onMouseLeave={() => setHovered(null)} // Reset hovered index on mouse leave
//             border={'1px solid white'}
//             overflow="hidden"
//           >
//             {/* Main Title Text positioned at the bottom */}
//             <Text
//               color="white"
//               fontSize="2xl"
//               fontWeight="bold"
//               position="absolute"
//               bottom="10px"
//               left="10px"
//               zIndex="2"
//             >
//               {`${index + 1}. ${title}`}
//             </Text>

//             {/* Description that slides up on hover */}
//             <Box
//               position="absolute"
//               bottom={hovered === index ? '10px' : '-100%'} // Slide up on hover
//               left="10px"
//               right="10px"
//               transition="bottom 0.3s ease"
//               color="white"
//               bg="rgba(0, 0, 0, 0.7)"
//               p="10px"
//               borderRadius="5px"
//               zIndex="1"
//             >
//               <Text fontSize="sm">{descriptions[index]}</Text>
//             </Box>
//           </Box>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default HoverGrid;

import { Box, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";

import first from "../../Media/digitalDelivery.jpg";
import second from "../../Media/NewBuisiness.jpg";
import third from "../../Media/Partnership.jpg";
import forth from "../../Media/ClientLearning.jpg";

const hoverEffects = {
  transform: "scale(1.03)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  transition: "transform 0.3s ease, background-color 0.3s ease",
};

function HoverGrid() {
  const [hovered, setHovered] = useState(null);

  const images = [first, second, third, forth];

  const descriptions = [
    "This is the description for Client Learning Programs. It provides insightful learning opportunities for clients.",
    "The Partnership Ecosystem focuses on building strong alliances to drive business growth and innovation.",
    "New Business Innovation fosters creative solutions and strategies for launching new business initiatives.",
    "Digital Delivery Platform offers efficient, technology-driven solutions for streamlined digital services.",
    "The fifth box represents a collaborative approach to achieving group objectives and learning.",
  ];

  const getBackgroundImage = () => {
    if (hovered === null) return images[0];
    return images[hovered];
  };

  return (
    <Box
      bgImage={`url(${getBackgroundImage()})`}
      bgSize="cover"
      bgPos="center"
      position="relative"
      height={{ base: "60vh", md: "80vh", lg: "100vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      // _hover={hoverEffects}
      // border="1px solid green"
      maxW="100vw"
      // m="auto"
    >
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        width="100%"
        height={"100%"}
      >
        {[
          "Client Learning Programs",
          "Partnership Ecosystem",
          "New Business Innovation",
          "Digital Delivery Platform",
        ].map((title, index) => (
          <Box
            key={index}
            position="relative"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            border={"1px solid white"}
            overflow="hidden"
            bg={hovered === index ? "rgba(0, 0, 0, 0.7)" : ""}
          >
            {/* Main Title Text positioned at the bottom */}
            <Text
              textAlign={"center"}
              color="white"
              fontSize="2xl"
              fontWeight="bold"
              position="absolute"
              bottom={hovered === index ? "25%" : "10px"} // Move up on hover
              left="5px"
              zIndex="2"
              transition="bottom 0.3s ease"
            >
              {`${index + 1}. ${title}`}
            </Text>

            {/* Description that slides up on hover */}
            <Box
              position="absolute"
              bottom={hovered === index ? "3%" : "-100%"} // Adjust the slide-up to be below the title
              left="10px"
              right="10px"
              transition="bottom 0.3s ease"
              color="white"
              // bg="rgba(0, 0, 0, 0.7)"
              p="10px"
              borderRadius="5px"
              zIndex="1"
            >
              <Text fontSize="sm">{descriptions[index]}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default HoverGrid;
