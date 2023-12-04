import { Box, Container, Flex, Image, Stack, Text } from '@chakra-ui/react'
import { GrInstagram } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import React from 'react'
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <Box
            bg={'gray.900'}
            color={'gray.200'}>
            <Container
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                {/* <Logo /> */}
                <Box>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Image w={"50px"} objectFit={'contain'} src='/logo1.png' display={{ base: "block", sm: "block" }}></Image>
                        <Text>Made with 🤍 By Yuval Leberstein</Text>
                        <Flex gap={3}>
                            <Link to={'https://www.instagram.com/yuval.leberstein/'}>
                                <GrInstagram />
                            </Link>
                            <Link to={'mailto:yuvalleberstein21@gmail.com'}>
                                <SiGmail />
                            </Link>

                        </Flex>
                    </Flex>
                </Box>
            </Container>
        </Box>
    )
}

export default FooterBottom