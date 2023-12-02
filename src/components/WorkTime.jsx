import { Badge, Box, Flex, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const WorkTime = () => {
    return (
        <>
            <Box>
                <Heading>BUISNESS HOURS</Heading>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' my={5}>
                    <Box p='6'>
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
                        <Flex justifyContent={"space-between"}>
                            <Box as='span' color='gray.600' fontSize='sm'>
                                Sunday <br />
                                Monday <br />
                                Tuesday <br />
                                Wednesday <br />
                                Thursday <br />
                                Friday <br />
                                Saturday <br />
                            </Box>
                            <Box as='span' color='gray.600' fontSize='sm'>
                                08:00 - 16:00 <br />
                                08:00 - 16:00 <br />
                                08:00 - 16:00 <br />
                                08:00 - 16:00 <br />
                                08:00 - 16:00 <br />
                                08:00 - 16:00 <br />
                                08:00 - 16:00 <br />
                            </Box>
                        </Flex>



                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default WorkTime