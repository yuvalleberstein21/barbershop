import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import WorkTime from '../components/WorkTime'
import Portfolio from './Portfolio'
import { Link } from "react-router-dom";


const HeroSectionScreen = () => {
    const handleContactSectionClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <Box position="relative" id='about'>
            <Box h="550px" position="absolute" top="0" left="0" right="0" zIndex="-1">
                <Container maxW={'7xl'} py={10} px={5} position="relative" zIndex="1" >
                    <Flex justifyContent={"space-between"} gap={3} p={3} flexDirection={{ base: 'column', sm: 'row' }} mt={{ base: '10px', sm: '30px' }} >
                        <Box maxW='32rem'>
                            <Flex justifyContent={'center'} alignItems={'center'}>
                                <Heading className='heading' fontSize={{ base: "35px", sm: "55px" }} mb={2} justifyContent={"center"} alignItems={"center"} ml={5} fontWeight={"bold"} color={'#FFFAF0'} >ABOUT OUR <br /> BARBER SHOP</Heading>
                            </Flex>
                            <Flex gap={5} justifyContent={'center'} alignItems={'center'}>
                                <Button size='md' fontSize={{ base: '10px', sm: "12px" }} bg={"#FFDEAD"} color={"black"} _hover={{ bg: "#FFDEAD", color: "gray.600" }} mt='24px'>
                                    <Link onClick={handleContactSectionClick}>
                                        SEND A MESSAGE
                                    </Link>
                                </Button>
                                <Button color='white' bg={"#353535"} onClick={handleContactSectionClick} p={2} size='md' _hover={{ bg: '#3355332e3', color: 'white' }} fontSize={{ base: '10px', sm: "12px" }} mt='24px'>
                                    CONTACT
                                </Button>
                            </Flex>

                            <Box mt={5} overflow={"hidden"} justifyContent={"flex-start"}>
                                <Image src='/image1.jpeg' borderRadius={1} objectFit={"cover"} />
                            </Box>
                        </Box>
                        <Box maxW='32rem'>
                            <Flex gap={2}>
                                <Text fontSize='14px' mt={2} fontWeight={'bold'} color={{ base: '#FFFAF0', sm: '#ffffff' }} overflow={'hidden'} className='heading'>
                                    Welcome to Arad's finest barber shop. I'm Shaked Zaguri,a 24-year-old craftsman dedicated to delivering premium haircuts daily.
                                </Text>
                            </Flex>

                            <Box p={3} overflow={"hidden"}>
                                <Image src='/image2.jpeg' borderRadius={1} h={{ base: '350px', sm: "550px" }} w="full" objectFit={"cover"} />
                            </Box>
                            <VStack mt={5} justifyContent={"center"} alignItems={"center"}>
                                <WorkTime />
                            </VStack>
                        </Box>
                    </Flex>
                </Container>
                <Portfolio />
            </Box>
        </Box>
    )
}

export default HeroSectionScreen