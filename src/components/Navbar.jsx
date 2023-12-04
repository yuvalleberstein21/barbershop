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


    return (
        <Box>
            <Container maxW={"container.lg"}>
                <Flex w={"full"} justifyContent={{ base: "center", sm: "space-between" }} pt={2} gap={{ base: 1, md: 3 }} alignItems={"center"} flexDir={{ base: "column", sm: "row" }}>
                    <Image w={"140px"} objectFit={'cover'} name='ShakedBarberShop' src='/logo1.png' display={{ base: "block", sm: "block" }} cursor={"pointer"}></Image>
                    <Flex color={'#fffaf0'} fontSize={18} gap={5} fontWeight={"bold"} dir='rtl'>
                        <Link as={RouterLink} to={"/home"} _hover={{ borderBottom: 'none', color: '#e8e3d9de' }}>בית</Link>
                        <Link as={RouterLink} to={"/portfolio"} _hover={{ borderBottom: 'none', color: '#e8e3d9de' }} onClick={handlePortfolioClick}>בלוג עבודות</Link>
                        <Link as={RouterLink} to={"/contact"} _hover={{ borderBottom: 'none', color: '#e8e3d9de' }} onClick={handleContactClick}>יצירת קשר</Link>
                    </Flex>

                    <Flex gap={4}>
                        <Link _hover={{ borderBottom: 'none' }} to={'tel:+972506485647'}>
                            <Button bg={"#353535"} display={{ base: 'none', md: 'block' }} color={"white"} _hover={{ bg: "#282828" }} size={"sm"}>
                                <Flex gap={3} justifyContent={'space-between'} dir='rtl'>
                                    חייגו אליי <FaPhoneAlt />
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