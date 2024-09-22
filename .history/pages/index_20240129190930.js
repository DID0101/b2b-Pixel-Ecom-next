import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Services from '../components/Services'
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../lib/api";
const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };



export default function Home() {
  
  return (
    <div>
      <Head>
        <title>B2B Pixel</title>
        <meta name="description" content="Local Business digital marketing" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Services />
    <Projects />
    <Contact />
    </div>
  )
}
