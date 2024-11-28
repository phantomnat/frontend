import { Button, calc, Center, SimpleGrid, Container, Heading, Image, Box, Flex, Spacer } from '@chakra-ui/react'
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
            <Box width={'100%'} height={'100%'}>
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
            <SimpleGrid
                minH='30vh'
                // height={['30vh', null, '50vh']}
                mt='3'
                columns={[1, null, 2]}
                style={{
                    backgroundImage: `url(https://www.magiclovehouse.com/stocks/branch/c2560x960/lx/b1/t5qvlxb1ki2/317264949_1504215106745286_6049798736393599195_n.jpeg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box
                    p={2}
                    minH='30vh'
                    maxW='100%'
                    maxH='100%'
                    backgroundColor={'rgba(0,0,0,0.2)'}
                >
                    <Center>
                        <Box zIndex={99} >
                            <Image
                                style={{
                                    transform: 'scale(0.3)'
                                }}
                                src="https://www.magiclovehouse.com/stocks/branch/c400x400/rg/zf/ju7grgzfadi/W_COUNTRY_COTTAGE.png"></Image>
                        </Box>
                    </Center>
                </Box>
                <Box
                    maxW='100%' minH='30vh' maxH='100%' p={6} overflow={'hidden'}
                    backgroundColor={'rgba(0,0,0,0.2)'}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.882420143105!2d100.3721900751637!3d13.785960896501612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29754458c9023%3A0xa53fe6796faf6a6d!2sCountry%20Cottage%20Magic%20Love%20House!5e0!3m2!1sen!2sth!4v1732805201086!5m2!1sen!2sth"
                        loading="lazy"
                        width={'100%'}
                        height={'100%'}
                        // style={{ minHeight: '30vh' }}
                        allowFullScreen={false}
                        referrerPolicy='no-referrer-when-downgrade'
                    >
                    </iframe>
                </Box>
            </SimpleGrid>
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