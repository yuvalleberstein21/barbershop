import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import WorkTime from '../components/WorkTime'
import Portfolio from './Portfolio'
import { Link as RouterLink } from "react-router-dom";


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
                                <Heading className='heading' fontSize={{ base: "35px", sm: "50px" }} mb={2} justifyContent={"center"} alignItems={"center"} ml={5} fontWeight={"bold"} color={'#2e2e2e'} fontStyle={'italic'}> <Text color={'#FFFAF0'}>SHAKED ZAGURI</Text> BARBER SHOP</Heading>
                            </Flex>
                            <Flex gap={5} justifyContent={'center'} alignItems={'center'}>
                                <Button size='md' fontSize={{ base: '10px', sm: "12px" }} bg={"#FFDEAD"} color={"black"} _hover={{ bg: "#FFDEAD", color: "gray.600" }} mt='24px'>
                                    <a href='https://api.whatsapp.com/send?phone=+972506485647'>
                                        שלחו לי הודעה
                                    </a>
                                </Button>
                                <Button color='white' bg={"#353535"} onClick={handleContactSectionClick} p={2} size='md' _hover={{ bg: '#3355332e3', color: 'white' }} fontSize={{ base: '12px', sm: "14px" }} mt='24px'>
                                    צור קשר
                                </Button>
                            </Flex>

                            <Box mt={10} overflow={"hidden"} justifyContent={"flex-start"}>
                                <Image src='/image1.jpeg' borderRadius={1} objectFit={"cover"} />
                            </Box>
                        </Box>
                        <Box maxW='32rem'>
                            <Flex gap={2}>
                                <Box>
                                    <Text fontSize={{ base: '16px', sm: '14px' }} mt={{ base: 12, sm: 1 }} mb={3} p={5} mr={3} fontWeight={'bold'} dir='rtl' color={{ base: '#ffffff', sm: '#ffffff' }} overflow={'hidden'} className='heading'>
                                        שקד זגורי בן 24 מערד מתעסק בתספורות פרימיום לגבר ברמה הכי גבוהה שיש ! <br /> מוזמנים לתאם תורים דרך הקישור לוואצאפ
                                    </Text>

                                </Box>


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