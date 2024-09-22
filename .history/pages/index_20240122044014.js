import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


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
