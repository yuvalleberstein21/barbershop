import { Avatar, Box, Button, Container, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <Box bg="black" minH="150px">
            <Container maxW={"container.lg"} my={2} bg={"black"}>
                <Flex w={"full"} justifyContent={{ base: "center", sm: "space-between" }} gap={{ base: 1, md: 3 }} alignItems={"center"} flexDir={{ base: "column", sm: "row" }}>
                    <Avatar name='ShakedBarberShop' src='/image1.jpeg' display={{ base: "block", sm: "block" }} cursor={"pointer"}></Avatar>
                    <Flex fontSize={14} gap={5} fontWeight={"bold"}>
                        <Link>HOME</Link>
                        <Link>ABOUT</Link>
                        <Link>POSTS</Link>
                        <Link>CONTACT</Link>
                    </Flex>

                    <Flex gap={4}>
                        <Link>
                            <Button bg={"#FFDEAD"} color={"#0e0e0e"} _hover={{ bg: "#FFDEAD", color: "gray.600" }} size={"sm"}>
                                BOOK AN APPOINTMENT
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </Box>

    )
}

export default Navbar