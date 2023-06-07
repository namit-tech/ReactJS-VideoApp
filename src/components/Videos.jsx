import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const Videos = () => {
  const videosArr = ["https://www.youtube.com/watch?v=b50zSyLiCYQ&t=11400s&ab_channel=6PackProgrammer",
   "https://www.youtube.com/watch?v=zQeV9ZPT1lU&list=PL9bD98LkBR7P16BndaNtP4x6Wf5Ib85Hm&index=15&ab_channel=Tech2etc",
   "https://www.youtube.com/watch?v=5cO5Xf4QVPY&ab_channel=Tech2etc",
    "", "",""];
  const [VideoSrc, setVideoSrc] = useState(videosArr[0])
  return (
    <Stack direction={["column", "row"]} h={"100vh"}>
      <VStack w={"full"}>
        <video controls controlsList='nodownload' src={VideoSrc} style={{ width: "100%" }}>
        </video>
        <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"auto"}>
          <Heading> Sample Video 1</Heading>
          <Text>This is a Sample video for testing and demo.</Text>
        </VStack>
      </VStack>
      <VStack w={["full", "xl"]} alignItems={"stretch"} p="8" spacing={"8"} overflowY={"auto"}>
       {
        videosArr.map((item, index)=>(
          <Button variant={"ghost"} colorScheme={"purple"} onClick={()=>setVideoSrc(item)}>
          Lecture {index + 1}
        </Button>
        ))
       }
      </VStack>
    </Stack>
  )
};

export default Videos;
