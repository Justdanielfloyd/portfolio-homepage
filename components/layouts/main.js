import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Daniel's home" />
        <meta name="author" content="Daniel Pinzón" />
        <meta name="author" content="danndepp" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Daniel Pinzón" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@danndepp" />
        <meta name="twitter:creator" content="@danndepp" />
        <meta name="twitter:image" content="#" />
        <meta property="og:site_name" content="Daniel Pinzón" />
        <meta name="og:title" content="Daniel Pinzón" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="#" />
        <title>Daniel Pinzón - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
