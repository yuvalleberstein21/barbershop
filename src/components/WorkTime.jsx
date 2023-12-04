import { Badge, Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const WorkTime = () => {
    return (
        <>
            <Box>
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Heading justifyContent={'center'} alignItems={'center'} mx={6}>BUISNESS HOURS</Heading>
                </Flex>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' my={5} bgColor='darkgray' bgImage={'/logo1.png'} bgRepeat={'no-repeat'} bgSize={'70%'} bgPosition={'center'}>
                    <Box p='6' h={'250px'} w={'350px'}>
                        <Box display='flex' alignItems='baseline' justifyContent={"space-between"}>
                            <Badge borderRadius='full' px='2' colorScheme='gray'>
                                DAY
                            </Badge>
                            <Badge
                                colorScheme='gray'
                                borderRadius='full'
                            >
                                HOURS
                            </Badge>
                        </Box>
                        <Flex justifyContent={"space-between"} alignItems={'center'} my={8}>
                            <Box as='span' color='gray.100' fontSize='sm' fontWeight={'bold'} >
                                Sunday <br />
                                Monday <br />
                                Tuesday <br />
                                Wednesday <br />
                                Thursday <br />
                                Friday <br />
                            </Box>
                            <Box as='span' color='gray.100' fontSize='sm' fontWeight={'bold'}>
                                09:00 - 20:00 <br />
                                09:00 - 20:00 <br />
                                09:00 - 20:00 <br />
                                09:00 - 20:00 <br />
                                09:00 - 20:00 <br />
                                09:00 - 15:00 <br />
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default WorkTime