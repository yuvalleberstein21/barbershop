import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import HowWeAreSectionScreen from './HowWeAreSectionScreen'

const HeroSectionScreen = () => {
    return (
        <Box position="relative">
            <Box bg="black" h="200px" position="absolute" top="0" left="0" right="0" zIndex="-1">
                <Container maxW={'7xl'} py={10} px={5} position="relative" zIndex="1">
                    <Flex justifyContent={"space-between"} mt={{ base: '10px', sm: '30px' }} gap={3} p={3} flexDirection={{ base: 'column', sm: 'row' }}>
                        <Box maxW='32rem'>
                            <Heading fontSize={{ base: "40px", sm: "60px" }} mb={2} justifyContent={"center"} alignItems={"center"} ml={5} fontWeight={"bold"}>ABOUT OUR <br /> BARBER SHOP</Heading>
                            <Flex gap={5} ml={5}>
                                <Button size='md' fontSize={{ base: '10px', sm: "12px" }} bg={"#FFDEAD"} color={"black"} _hover={{ bg: "#FFDEAD", color: "gray.600" }} mt='24px'>
                                    BOOK AN APPOINTMENT
                                </Button>
                                <Button colorScheme='white' p={2} variant='outline' size='md' fontSize={{ base: '10px', sm: "12px" }} mt='24px'>
                                    CONTACT
                                </Button>
                            </Flex>

                            <Box mt={5} overflow={"hidden"} justifyContent={"flex-start"}>
                                <Image src='/image1.jpeg' borderRadius={1} objectFit={"cover"} />
                            </Box>
                        </Box>
                        <Box maxW='32rem'>
                            <Text fontSize='md' mt={2}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia dolorum maiores, delectus atque optio porro, veritatis alias a, fugit quae? Quis cumque incidunt ad possimus repudiandae perferendis quam amet.
                            </Text>
                            <Box p={3} overflow={"hidden"}>
                                <Image src='/image2.jpeg' borderRadius={1} h="450px" w="full" objectFit={"cover"} />
                            </Box>
                        </Box>
                    </Flex>
                    <HowWeAreSectionScreen />
                </Container>
            </Box>
        </Box>


    )
}

export default HeroSectionScreen