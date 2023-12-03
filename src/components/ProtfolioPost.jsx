import { Flex, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const ProtfolioPost = ({ img }) => {
    return (
        <>

            <GridItem
                cursor={"pointer"}
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                position={"relative"}

            >
                <Flex
                    opacity={0}
                    _hover={{ opacity: 4, bgImage: '/logo1.png', bgPosition: 'center', bgSize: 'cover' }}
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg={"blackAlpha.300"}
                    transition={"all .3s ease"}
                    zIndex={1}
                    justifyContent={"center"}
                >
                </Flex>
                <Image src={img} alt='profile post' w={"full"} h={"400px"} objectFit={"cover"} />
            </GridItem >
        </>
    )
}

export default ProtfolioPost