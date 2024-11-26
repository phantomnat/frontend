import { Button, calc, Center, Container, Heading, Image, Box, Flex, Spacer } from '@chakra-ui/react'
import NavBar from 'components/navbar'
import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Slider, { Settings } from 'react-slick'

const PhotoAutoPlay: React.FC<{}> = ({ }) => {
    const setting: Settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 5000,
        // cssEase: 'linear'
    }
    const photos = [
        {
            image: 'https://placehold.co/1920x1080.png',
        },
        {
            image: 'https://placehold.co/1921x1080.png',
        },
        {
            image: 'https://placehold.co/1922x1080.png',
        },
    ]

    return (
        <Slider {...setting}>
            {
                photos.map((photo, idx) => {
                    return (
                        <div style={{ width: '100%', height: '100vh' }}>
                            <div
                                key={idx}
                                style={{
                                    backgroundImage: `url(${photo.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: 'no-repeat',
                                    height: "calc(0px + 100vh)",
                                }}
                            >
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

const Wedding: React.FC<{}> = ({ }) => {

    return (
        <>
            <Box width={'100%'} height={'100vh'}>
                <PhotoAutoPlay />
            </Box>
            <Center
                height={'100vh'}
                mt='10'
                style={{
                    backgroundImage: `url(https://placehold.co/1920x1080.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: 'no-repeat',
                    height: "calc(0px + 100vh)",
                }}
            >
                <Heading as='h2' size='xl'>Our happiness</Heading>
            </Center>
            <Box mt='5'>
                <Center>
                    <Heading as='h2'>Location</Heading>
                </Center>
            </Box>
            <Flex height='30vh' mt='3'>
                <Box width={'40vh'}>
                    <Center>
                        Country Cottage
                    </Center>
                </Box>
                <Box width={'40vh'} overflow='hidden'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15503.586688579919!2d100.4958685!3d13.72470515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298f1540261dd%3A0x61c1a2ab4c64410a!2sBright%20Wongwian%20Yai!5e0!3m2!1sen!2sth!4v1732625838091!5m2!1sen!2sth"
                        loading="lazy"
                        width={'100%'}
                        height={'100%'}
                    // referrerpolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                    {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" ></iframe> */}
                </Box>
            </Flex>
            <Flex height='50vh' width='100%' mt='4' style={{
                backgroundImage: `url(https://placehold.co/1920x1080.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: 'no-repeat',
                height: "calc(0px + 100vh)",
            }}>
                <Center width='100%'>
                    <Heading as='h2'>
                        Thank you
                    </Heading>
                </Center>
            </Flex>
        </>
    )
}

export default Wedding