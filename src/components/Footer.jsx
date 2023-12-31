import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import FooterBottom from './FooterBottom';

const Footer = () => {
    return (
        <>
            <Box id='contact' h={'full'} bgPosition={'center'} bgSize={'cover'} bgImage={'/wepik-export-202312072012569XUO.jpeg'} position={'relative'}>
                <Flex className='float'>
                    <Link as={RouterLink} to={'https://api.whatsapp.com/send?phone=+972506485647'}>
                        <FaWhatsapp className='my-float' />
                    </Link>
                </Flex>
            </Box>
            <FooterBottom />
        </>
    )
}

export default Footer