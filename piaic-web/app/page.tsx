"use client"

// import Image from 'next/image'
import styles from './page.module.css'
import { Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'
import { Img } from '@chakra-ui/react'
import Banner from './Banner'
import Instructors from './instructors'
import Courses from './courses'
import Dao from './dao'



export default function Home() {
  return (
<>


<Banner/>
<Courses/>
<Dao/>  
<Instructors/>


  </>
  )
}
