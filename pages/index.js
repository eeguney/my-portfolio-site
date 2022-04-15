import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import Wrapper from '../components/Wrapper/Wrapper'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Hero />
      </Wrapper>

    </>
  )
}
