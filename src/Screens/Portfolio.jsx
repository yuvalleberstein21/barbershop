import { Box, Button, Flex, Grid, Heading, Image, Link } from '@chakra-ui/react'
import React from 'react'
import ProtfolioPost from '../components/ProtfolioPost'
import Footer from '../components/Footer'
import { BsInstagram } from "react-icons/bs";


const Portfolio = () => {
    return (
        <>
            <Flex justifyContent={'center'} alignItems={'center'} id='portfolio'>
                <Heading borderBottom={'1px solid gray'} transform='scale(1.1)' transition={'all .2s ease-in-out'} p={3}>PORTFOLIO</Heading>
            </Flex>
            <Grid
                templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
                gap={4}
                columnGap={3}
                p={5}
            >
                <ProtfolioPost img="/image3.jpeg" />
                <ProtfolioPost img="/image4.jpeg" />
                <ProtfolioPost img="/image5.jpeg" />
                <ProtfolioPost img="/image6.jpeg" />
                <ProtfolioPost img="/image7.jpeg" />
                <ProtfolioPost img="/image8.jpeg" />
            </Grid>
            <Box mb={8}>
                <Flex gap={3} justifyContent={'center'} alignItems={'center'} w={'full'}>
                    <Button color='black' border={'2px solid black'} p={2} variant='outline' size='md' _hover={{ bg: 'black', color: 'white' }} fontSize={{ base: '10px', sm: "12px" }} mt='24px'>
                        BOOK AN APPOINTMENT
                    </Button>
                    <Button color='white' border={'2px solid black'} bg={'black'} p={2} variant='outline' size='md' _hover={{ bg: 'whiteAlpha.600', color: 'black' }} fontSize={{ base: '10px', sm: "12px" }} mt='24px'>
                        LEARN MORE
                    </Button>
                </Flex>
            </Box>
            <Footer />
        </>
    )
}

export default Portfolio