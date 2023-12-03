import { Badge, Box, Flex, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const WorkTime = () => {
    return (
        <>
            <Box>
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Heading justifyContent={'center'} alignItems={'center'} mx={6}>BUISNESS HOURS</Heading>
                </Flex>

                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' my={5} bgImage={'/logo2.png'} bgRepeat={'no-repeat'} bgPosition={'center'} bgSize={'cover'}>
                    <Box p='6' h={'250px'} w={'350px'}>
                        <Box display='flex' alignItems='baseline' justifyContent={"space-between"}>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                DAY
                            </Badge>
                            <Badge
                                colorScheme='teal'
                                borderRadius='full' px='2'
                            >
                                HOURS
                            </Badge>
                        </Box>
                        <Flex justifyContent={"space-between"} alignItems={'center'} my={8}>
                            <Box as='span' color='gray.300' fontSize='sm' fontWeight={'bold'} gap={5}>
                                Sunday <br />
                                Monday <br />
                                Tuesday <br />
                                Wednesday <br />
                                Thursday <br />
                                Friday <br />

                            </Box>
                            <Box as='span' color='gray.300' fontSize='sm' fontWeight={'bold'}>
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