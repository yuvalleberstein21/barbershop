import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import ProtfolioPost from '../components/ProtfolioPost'
import Footer from '../components/Footer'


const Portfolio = () => {
    return (
        <>
            <Flex justifyContent={'center'} alignItems={'center'} id='portfolio'>
                <Heading borderBottom={'2px solid #393939'} borderRadius={3} fontSize={'55px'} p={3}>גלריה</Heading>
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
                <Flex justifyContent={'center'} alignItems={'center'} id='portfolio'>
                    <Heading borderBottom={'2px solid #393939'} fontSize={'55px'} p={3}>צור קשר</Heading>
                </Flex>
            </Box>
            <Footer />
        </>
    )
}

export default Portfolio