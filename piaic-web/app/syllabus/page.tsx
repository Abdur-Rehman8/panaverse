"use client"
import { Box, Center, Container, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Home from '../Home'
import { CommanCourse } from '../databse'
import { CourseDetail } from '../databse'

export default function Syllabus() {
  return (
    < >
      <Home title="Syllabus" src={'/about.webp'} />
      <Box>
        <Container maxW={1400} py="75px">

          <Box>
            <Center>
              <Heading pl="15px" borderColor='cyan.400 !important' borderLeft="8px" borderStyle={"solid"} size={"2xl"}>Course Syllabus</Heading>
            </Center>
            <Text px={{lg:"100px",base:"30px"}} textAlign={"center"} pt="23px" pb="34px"> The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text></Box>
          <Box><Center>
            <Heading pl="15px" borderColor='cyan.400 !important' borderLeft="8px" borderStyle={"solid"}>Common in All</Heading>
          </Center>
            <Text pt="20px" textAlign={"center"}>Every participant of the program will start by completing the following three core courses:</Text></Box>


          <Box py="65px" px={{lg:"100px" ,base:"30px"}}>
            <SimpleGrid gap={30} templateColumns={{lg:'repeat(3,1fr)',md:'repeat(2,1fr)',base:'repeat(,1fr)'}} >
              {CommanCourse.map((ins) =>
                <Box key={ins.id} textAlign={"center"} py="20px" borderRadius={"2xl"} boxShadow="dark-lg" padding={"35px"} >
                  <Heading borderBottom={"4px solid cyan"}>
                    {ins.heading}
                  </Heading>
                  <Text pt="10px">
                    {ins.text}
                  </Text>
                </Box>
              )}
            </SimpleGrid>
          </Box>



          <Box textAlign={"center"}>
            <Center >
              <Heading borderColor='cyan.400 !important' borderLeft="8px" borderStyle={"solid"} pl="15px">
                Specialized Tracks
              </Heading>

            </Center>
            <Text pt="20px">
              After completing the first two quarters the participants will select one or more specializations consisting of two courses each:
            </Text>
          </Box>
        </Container>
      </Box>

      <Box>
        <Container maxW={1400} textAlign="center" py="50PX" bgImage={"/courseBg.jfif"} bgAttachment="fixed" bgSize={"cover"}>
          {CourseDetail.map((ins) =>
            <Box py="30px" key={ins.id}>

              <Center>
                <Heading color="rgb(0,0,0)" size={{lg:"xl",base:"md"}} borderColor='cyan.400 !important' borderLeft="8px" borderStyle={"solid"} pl="15px" textAlign={{lg:"center", base:"start"}}>
                  {ins.heading}
                </Heading>
              </Center>
              <Text py="20px" color="whiteAlpha.900" px={{lg:"120px",base:"10px"}}>
                {ins.text}
              </Text>
              <SimpleGrid gap={"30px"} px={{xl:"230px",md:"50px",base:"40px"}} templateColumns={{md:'repeat(2,1fr)',sm:'repeat(1,1fr)'}} >

                <Box textAlign={"center"} py="20px" borderRadius={"2xl"} boxShadow="dark-lg" padding={"35px"} bgColor="white">
                  <Heading borderBottom={"4px solid cyan"} size={{lg:"xl",base:"lg"}} >
                    {ins.Quarter4.heading}
                  </Heading>
                  <Heading pt="10px" size={{lg:"sm",base:"xs"}}>
                    {ins.Quarter4.text}
                  </Heading>
                </Box>
                <Box textAlign={"center"} py="20px" borderRadius={"2xl"} boxShadow="dark-lg" padding={"35px"} bgColor="white" >
                  <Heading borderBottom={"4px solid cyan"} size={{lg:"xl",base:"lg"}}>
                    {ins.Quarter5.heading}
                  </Heading>
                  <Heading pt="10px"size={{lg:"sm",base:"xs"}}>
                    {ins.Quarter5.text}
                  </Heading>
                </Box>

              </SimpleGrid>

            </Box>
          )}



        </Container>
      </Box>

    </>

  )
}


