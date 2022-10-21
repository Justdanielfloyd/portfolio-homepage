import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
    <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Con Permiso de Residencia & Trabajo en Andorra
      </Box>
    <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
        
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Pinzón
          </Heading>
          <p>Craftsman Digital ( Diseñador / Desarrollador )</p>
        </Box>

          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
             <ProfileImage
              src="/images/daniel1.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Sobre mí
        </Heading>
        <Paragraph>
          He realizado trabajos remotos para agencias y he tenido la fortuna de colaborar con personas
          muy talentosas a la hora de crear {' '}
          <NextLink href="/works" passHref scroll={false}>
            <Link>páginas web y productos digitales de uso comercial</Link>
          </NextLink>
          . Me apasiona diseñar páginas web adaptables que sean rápidas, fáciles de usar 
          y elaboradas con las tecnologías mas eficientes para mis clientes. Me especializo
          principalmente en Frontend: <b>HTML, CSS, JS</b>, desarrollo de aplicaciones web de peque;a y mediana escala.
         
          <br />
          <br />
        </Paragraph>
        De igual modo, tengo experiencia como desarrollador full-stack usando CMS populares tales como 
          <b> Wordpress y Drupal.</b>

        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mi portafolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Nací en Ibagué (TOL), Colombia.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Completé el programa de Técnico en Sistemas Informáticos del Politécnico Americano.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Certifiqué Inglés como segunda lengua ante el British Council (IELTS Académico B2).
        </BioSection>
        <BioSection>
          <BioYear>2017 · ahora</BioYear>
          Trabajando como freelancer.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Yo ♥
        </Heading>
        <Paragraph>
          Edición de vídeo, {' '}
          <Link href="https://500px.com/p/danielpinzonp" target="_blank">
            Fotografía
          </Link>
          , Ciclismo, Música
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          En la red
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Justdanielfloyd" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @justdanielfloyd
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @danndepp
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/danndepp" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @danndepp
              </Button>
            </Link>
          </ListItem>
        </List>

        

        <Box align="center" my={4}>
          <NextLink href="/#" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mi blog
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
