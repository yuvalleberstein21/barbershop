import { Badge, Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const WorkTime = () => {
    return (
        <>
            <Box>
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Heading dir='rtl' justifyContent={'center'} alignItems={'center'} mx={6}>שעות פעילות</Heading>
                </Flex>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' my={5} bgColor='darkgray' bgImage={'/logo1.png'} bgRepeat={'no-repeat'} bgSize={'70%'} bgPosition={'center'}>
                    <Box p='6' h={'250px'} w={'350px'}>
                        <Box display='flex' alignItems='baseline' justifyContent={"space-between"}>
                            <Badge borderRadius='full' px='2' colorScheme='gray'>
                                שעות
                            </Badge>
                            <Badge
                                colorScheme='gray'
                                borderRadius='full'
                                mr={10}
                            >
                                ימים

                            </Badge>
                        </Box>
                        <Flex justifyContent={"space-between"} alignItems={'center'} my={8} dir='rtl'>
                            <Box as='span' color='gray.100' fontSize='sm' fontWeight={'bold'} mr={10}>
                                ראשון <br />
                                שני <br />
                                שלישי <br />
                                רביעי <br />
                                חמישי <br />
                                שישי <br />
                            </Box>
                            <Box as='span' color='gray.100' fontSize='sm' fontWeight={'bold'} dir='rtl'>
                                20:00 - 09:00  <br />
                                20:00 - 09:00 <br />
                                20:00 - 09:00 <br />
                                20:00 - 09:00 <br />
                                20:00 - 09:00 <br />
                                15:00 - 09:00 <br />
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default WorkTime