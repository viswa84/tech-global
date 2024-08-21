// import React from "react";
// import {
//   Box,
//   Flex,
//   Text,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Button,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { ChevronDownIcon } from "@chakra-ui/icons";

// const Navbar = () => {
//   return (
//     <Box bg="#004AAD" p={2}>
//       <Flex align="center" ml={4}>
//         <Link to="/">
//           <Text
//             className="nav-item"
//             color="white"
//             fontSize="xs"
//             fontWeight="semibold"
//             p={1}
//             ml={10}
//           >
//             Home
//           </Text>
//         </Link>
//         <Link to="/about">
//           <Text
//             className="nav-item"
//             color="white"
//             fontSize="xs"
//             fontWeight="semibold"
//             p={1}
//             ml={10}
//           >
//             About Us
//           </Text>
//         </Link>
//         <Box
//           position="relative"
//           display="inline-block"
//           ml={10}
//           _hover={{ '.menu-list': { display: 'block' } }} // Show menu on hover
//         >
//           <Menu>
//             <MenuButton
//               as={Button}
//               colorScheme="blue"
//               variant="link"
//               color="white"
//               fontSize="xs"
//               fontWeight="semibold"
//               rightIcon={<ChevronDownIcon />}
//               _focus={{ boxShadow: "none" }} // Remove focus box shadow
//               _hover={{ textDecoration: "none" }} // Ensure no underline on hover
//               _active={{ textDecoration: "none" }}
//             >
//               <Text className="nav-item" fontSize="xs" fontWeight="semibold">
//                 Our Services
//               </Text>
//             </MenuButton>
//             <MenuList className="menu-list" display="none">
//               <MenuItem>
//                 <Link to="/option1">
//                   <Text fontSize="xs" fontWeight="semibold">
//                     Option 1
//                   </Text>
//                 </Link>
//               </MenuItem>
//               <MenuItem>
//                 <Link to="/option2">
//                   <Text fontSize="xs" fontWeight="semibold">
//                     Option 2
//                   </Text>
//                 </Link>
//               </MenuItem>
//             </MenuList>
//           </Menu>
//         </Box>
//         <Link to="/contact">
//           <Text
//             className="nav-item"
//             color="white"
//             fontSize="xs"
//             fontWeight="semibold"
//             p={1}
//             ml={10}
//           >
//             Contact
//           </Text>
//         </Link>
//       </Flex>
//       <style jsx>{`
//         .nav-item {
//           position: relative;
//           display: inline-block;
//         }

//         .nav-item::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: -8px; /* Adjust this value to move the underline further down */
//           width: 100%;
//           height: 2px; /* Thickness of the underline */
//           background-color: white;
//           transform: scaleX(0);
//           transform-origin: bottom left;
//           transition: transform 0.3s ease;
//         }

//         .nav-item:hover::after {
//           transform: scaleX(1);
//           transform-origin: bottom left;
//         }

//         .menu-list {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           display: none;
//           background: #004AAD;
//           z-index: 10; /* Ensure dropdown is above other content */
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box bg="#004AAD" p={2} className={isSticky ? "sticky" : ""}>
      <Flex align="center" ml={4}>
        <Link to="/">
          <Text
            className="nav-item"
            color="white"
            fontSize="xs"
            fontWeight="semibold"
            p={1}
            ml={10}
          >
            Home
          </Text>
        </Link>
        <Link to="/about">
          <Text
            className="nav-item"
            color="white"
            fontSize="xs"
            fontWeight="semibold"
            p={1}
            ml={10}
          >
            About Us
          </Text>
        </Link>
        <Box
          position="relative"
          display="inline-block"
          ml={10}
          _hover={{ '.menu-list': { display: 'block' } }} // Show menu on hover
        >
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="blue"
              variant="link"
              color="white"
              fontSize="xs"
              fontWeight="semibold"
              rightIcon={<ChevronDownIcon />}
              _focus={{ boxShadow: "none" }} // Remove focus box shadow
              _hover={{ textDecoration: "none" }} // Ensure no underline on hover
              _active={{ textDecoration: "none" }}
            >
              <Text className="nav-item" fontSize="xs" fontWeight="semibold">
                Our Services
              </Text>
            </MenuButton>
            <MenuList className="menu-list" display="none">
              <MenuItem>
                <Link to="/option1">
                  <Text fontSize="xs" fontWeight="semibold">
                    Option 1
                  </Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/option2">
                  <Text fontSize="xs" fontWeight="semibold">
                    Option 2
                  </Text>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Link to="/contact">
          <Text
            className="nav-item"
            color="white"
            fontSize="xs"
            fontWeight="semibold"
            p={1}
            ml={10}
          >
            Contact
          </Text>
        </Link>
      </Flex>
      <style jsx>{`
      .sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}

        .nav-item {
          position: relative;
          display: inline-block;
        }

        .nav-item::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px; /* Adjust this value to move the underline further down */
          width: 100%;
          height: 2px; /* Thickness of the underline */
          background-color: white;
          transform: scaleX(0);
          transform-origin: bottom left;
          transition: transform 0.3s ease;
        }

        .nav-item:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .menu-list {
          position: absolute;
          top: 100%;
          left: 0;
          display: none;
          background: #004AAD;
          z-index: 10; /* Ensure dropdown is above other content */
        }
      `}</style>
    </Box>
  );
};

export default Navbar;

