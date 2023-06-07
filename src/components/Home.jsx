import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/1.jpg";
import img2 from "../assests/2.jpg";
import img3 from "../assests/3.jpg";
import img4 from "../assests/4.jpg";
import img5 from "../assests/5.png";
import { Container } from 'react-bootstrap';
const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "upperCase",
    p: "4",
    size: "4xl"
}
const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={"container.xl "} minH={'100vh'} bgColor="red">
                <Heading textTransform={"uppercase"} py="2" w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
                <Stack
                    h={'full'}
                    p={'4'}
                    alignItems={"center"}
                    direction={['column', 'row']}>
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={['4', '16']} textAlign={'center '}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam consequatur quae soluta harum, quod illum repellendus, saepe dolore error alias. Ad blanditiis dolore ipsum reprehenderit mollitia provident non id.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
};
const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={"full"} h={"100vh"}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Watch the Future
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.800"} color={"black"} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Night Life is Cool
            </Heading>
        </Box>
    </Carousel>
)

export default Home;
