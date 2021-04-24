import { Image, Flex, Heading, Text, Spacer, Icon, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { TrophyOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';

// Use this https://codepen.io/sosuke/pen/Pjoqqp to get filter for desired icon color

export default function TopNavBar() {
    const [username, setUsername] = useState('username');
    const [points, setPoints] = useState(0);

    return (
        <>
            <Flex bgColor="brand.darkgrey" paddingX="3em" height="4em" alignItems="center">
                <Link to="/">
                    <HStack spacing="1em">
                        <Image
                            src="./logo.svg"
                            alt="Skiller logo"
                            height="3em"
                            filter="invert(49%) sepia(69%) saturate(3966%) hue-rotate(359deg) brightness(103%) contrast(110%);"
                        />
                        <Heading size="md" color="brand.orange">
                            SKILLER
                        </Heading>
                    </HStack>
                </Link>
                <Spacer />
                <HStack spacing="2em">
                    <Icon
                        as={TrophyOutline}
                        filter="invert(49%) sepia(69%) saturate(3966%) hue-rotate(359deg) brightness(103%) contrast(110%);"
                    />
                    <Text mr="2" color="brand.orange">
                        {points} pt.
                    </Text>
                    <Text mr="2" color="brand.orange">
                        {username}
                    </Text>
                </HStack>
            </Flex>
        </>
    );
}
