import React from 'react';

import {
    Flex,
    HStack,
    Text,
} from '@chakra-ui/react'

export const navbarHeight = 20;
  
const Navbar : React.FC = () => {    
    return (
        <Flex
            position='absolute'
            top={0}
            left={0}
            right={0}
            zIndex={100}
            height={navbarHeight}
            w='100%'
            gap={8}
            alignItems='center'
            p={4}
        >
            <HStack
                flex={1}
                justifyContent='space-between'
            >
                <Text
                    fontSize='2xl'
                    fontWeight='bold'
                >
                    Disco Floor
                </Text>
            </HStack>
        </Flex>
    );
};

export default Navbar