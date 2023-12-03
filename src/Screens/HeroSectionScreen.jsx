import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import WorkTime from '../components/WorkTime'
import Portfolio from './Portfolio'


const HeroSectionScreen = () => {
    return (
        <Box position="relative">
            <Box bg="black" h="550px" position="absolute" top="0" left="0" right="0" zIndex="-1">
                <Container maxW={'7xl'} py={10} px={5} position="relative" zIndex="1" >
                    <Flex justifyContent={"space-between"} gap={3} p={3} flexDirection={{ base: 'column', sm: 'row' }} mt={{ base: '10px', sm: '30px' }} >
                        <Box maxW='32rem'>
                            <Flex justifyContent={'center'} alignItems={'center'}>
                                <Heading fontSize={{ base: "40px", sm: "60px" }} mb={2} justifyContent={"center"} alignItems={"center"} ml={5} fontWeight={"bold"} color={'#FFFAF0'}>ABOUT OUR <br /> BARBER SHOP</Heading>
                            </Flex>
                            <Flex gap={5} justifyContent={'center'} alignItems={'center'}>
                                <Button size='md' fontSize={{ base: '10px', sm: "12px" }} bg={"#FFDEAD"} color={"black"} _hover={{ bg: "#FFDEAD", color: "gray.600" }} mt='24px'>
                                    BOOK AN APPOINTMENT
                                </Button>
                                <Button color='white' p={2} variant='outline' size='md' _hover={{ bg: '#FFDEAD', color: 'black' }} fontSize={{ base: '10px', sm: "12px" }} mt='24px'>
                                    CONTACT
                                </Button>
                            </Flex>

                            <Box mt={5} overflow={"hidden"} justifyContent={"flex-start"}>
                                <Image src='/image1.jpeg' borderRadius={1} objectFit={"cover"} />
                            </Box>
                        </Box>
                        <Box maxW='32rem'>
                            <Text fontSize='md' mt={2} color={{ base: 'black', sm: '#FFFAF0' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia dolorum maiores, delectus atque optio porro, veritatis alias a, fugit quae? Quis cumque incidunt ad possimus repudiandae perferendis quam amet.
                            </Text>
                            <Box p={3} overflow={"hidden"}>
                                <Image src='/image2.jpeg' borderRadius={1} h={{ base: '350px', sm: "450px" }} w="full" objectFit={"cover"} />
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