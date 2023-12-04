import { Box, Button, Container, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link, Link as RouterLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {

    const handleContactClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handlePortfolioClick = (e) => {
        e.preventDefault();
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleAboutClick = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box bg="black">
            <Container maxW={"container.lg"} bg={'black'}>
                <Flex w={"full"} justifyContent={{ base: "center", sm: "space-between" }} pt={2} gap={{ base: 1, md: 3 }} alignItems={"center"} flexDir={{ base: "column", sm: "row" }}>
                    <Image w={"150px"} objectFit={'cover'} name='ShakedBarberShop' src='/logo1.png' display={{ base: "block", sm: "block" }} cursor={"pointer"}></Image>
                    <Flex color={'#fffaf0'} fontSize={14} gap={5} fontWeight={"bold"}>
                        <Link as={RouterLink} to={"/home"} _hover={{ borderBottom: 'none', color: '#e8e3d9de' }}>HOME</Link>
                        <Link as={RouterLink} to={"/about"} _hover={{ borderBottom: 'none', color: '#e8e3d9de' }} onClick={handleAboutClick}>ABOUT</Link>
                        <Link as={RouterLink} to={"/portfolio"} _hover={{ borderBottom: 'none', color: '#e8e3d9de' }} onClick={handlePortfolioClick}>PORTFOLIO</Link>
                        <Link as={RouterLink} to={"/contact"} _hover={{ borderBottom: 'none', color: '#e8e3d9de' }} onClick={handleContactClick}>CONTACT</Link>
                    </Flex>

                    <Flex gap={4}>
                        <Link _hover={{ borderBottom: 'none' }} to={'tel:+972506485647'}>
                            <Button bg={"#FFDEAD"} display={{ base: 'none', md: 'block' }} color={"#0e0e0e"} _hover={{ bg: "#FFDEAD" }} size={"sm"}>
                                <Flex gap={3} justifyContent={'space-between'}>
                                    CALL ME <FaPhoneAlt />
                                </Flex>
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </Box >

    )
}

export default Navbar