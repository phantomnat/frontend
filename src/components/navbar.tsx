import React from 'react'
import {
    Box,
    Flex,
    Avatar,
    Container,
    Stack,
    Button,
    Menu,
    MenuButton,
    useColorModeValue,
    useColorMode
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const NavBar: React.FC<{}> = ({ }) => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Container maxW='container.lg'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Welcome :)</Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
                </Container>
            </Box>
        </>
    )
}

export default NavBar
