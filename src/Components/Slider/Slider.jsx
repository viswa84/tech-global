import React, { useRef, useEffect } from "react";
import { Box, HStack, Image, keyframes } from "@chakra-ui/react";
import IBMMedia from "../../Media/IBMMedia.svg";
import Boosterio from "../../Media/boosterio.svg";
import GreenHost from "../../Media/greenHost.svg";
import CEOMind from "../../Media/ceoMind.svg";
import AtomicSEO from "../../Media/AtomicCEO.svg";
import Yodgy from "../../Media/yodgy.svg";

const logos = [
  { src: IBMMedia, alt: "IBM Media" },
  { src: GreenHost, alt: "Green Host" },
  { src: Yodgy, alt: "Yodgy" },
  { src: AtomicSEO, alt: "Atomic SEO" },
  { src: Boosterio, alt: "Boosterio" },
  { src: CEOMind, alt: "SEO Mind" },
];

// Keyframe for infinite sliding effect
const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Slider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const totalWidth = container.scrollWidth; // Get the full scrollable width
      container.style.width = `${totalWidth * 2}px`; // Double the width to support infinite sliding
    }
  }, []);

  return (
    <Box overflow="hidden" w="full" bg="gray.100" p={4}>
      <HStack
        ref={containerRef}
        as="div"
        spacing={0}
        w="max-content"
        display="flex"
        animation={`${slide} 30s linear infinite`}
      >
        {/* Duplicate logos to create continuous slide effect */}
        {[...logos, ...logos].map((logo, idx) => (
          <Box
            key={idx}
            flex="0 0 auto"
            // w="auto"
            mx={2}
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="100px"
            // border="1px solid green"
          >
            <Image src={logo.src} alt={logo.alt} h="60px" />
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default Slider;
