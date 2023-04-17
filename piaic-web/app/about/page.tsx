"use client"
import { Box, Container, Flex, Heading, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'
import Home from '../Home'
import Instructors from '../instructors'

export default function About() {
  return (
    <>
      <Home title="About" src={'/about.webp'} />
      <Box>
        <Container maxW={1400} >
          <Box pt={{ lg: "100px", base: "50px" }} textAlign={{ lg: "center", base: "left" }} px={{ lg: "70px", base: "0px" }}>
            <Heading pl="10px" borderColor='cyan.400 !important' borderLeft={{ lg: "0px", base: "8px" }} borderStyle={"solid"} >
              Panaverse DAO
            </Heading>
            <Text pr={{ lg: "135px", base: "10px" }} pl={{ lg: "135px", base: "0px" }} pb="10px" pt="10px">
              Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet
            </Text>
            <Text pr={{ lg: "135px", base: "10px" }} pl={{ lg: "135px", base: "0px" }}>
              President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
            </Text>
          </Box>

        </Container>

      </Box>




      <Box pt="100px" pb="100px">
        <Container maxW={1400}>

          <Flex px={{ lg: "50px", base: "10px" }} display={{ lg: "flex", base: "grid" }}>
            <Box flexBasis={"50%"} >
              <Image mx="auto" alt="87876" src="/President.webp" padding={{ lg: "0px", base: "0px 15px 50px 15px" }} />
            </Box>


            <Box flexBasis={"50%"} >
              <Heading size="2xl" pl="15px" borderColor='cyan.400 !important' borderLeft="8px" borderStyle={"solid"} >
                Dr. Arif Alvi
              </Heading>

              <Text pb="19px" pt="20px">
                Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.
              </Text>
              <Text pb="19px">
                Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.
              </Text>
              <Text>
                President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>


      <Box pt={{ lg: "100px", base: "0px" }} pb="100px">
        <Container maxW={1400}>

          <Flex px={{ lg: "50px", base: "10px" }} display={{ lg: "flex", base: "grid" }}>


            <Box flexBasis={"50%"} alignItems="center">
              <Heading size="2xl" pl="15px" borderColor='cyan.400 !important' borderLeft="8px" borderStyle={"solid"} >
                Zia Khan
              </Heading>

              <Text pb="19px" pt="20px">
                CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.
              </Text>
              <Text pb="19px">
                Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.
              </Text>

            </Box>

            <Box flexBasis={"50%"} >
              <Image mx="auto" alt="jhgkjhg" src="/Zia.jpg" padding={{ lg: "0px", base: "0px 15px 50px 15px" }} />
            </Box>

          </Flex>
        </Container>
      </Box>
      <Instructors />
    </>
  )
}
