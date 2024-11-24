import { Button, calc, Center, Container, Heading, Image, Box } from '@chakra-ui/react'
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
            <div style={{ width: '100%', height: '100vh' }}>
                <PhotoAutoPlay />
            </div>
            <Center mt={4}>
                <Heading as='h2' size='xl'>Our happiness</Heading>
            </Center>
        </>
    )
}

export default Wedding