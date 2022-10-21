import NextLink from 'next/link'
import { useState } from 'react'
import {
    Container, Box, Heading, Button,
    VStack, Wrap, WrapItem, FormControl,
    FormLabel, Input, InputGroup, InputLeftElement, Textarea,
} from '@chakra-ui/react';
import { MdOutlineEmail, } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import Layout from '../components/layouts/article';
import { ChevronRightIcon } from '@chakra-ui/icons'


const Contact = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
          setSubmitted(true);
        }, 100);
      };

      if (submitted) {
        return (
          <>
            <div className="text-2xl">Thank you!</div>
            <div className="text-md">We'll be in touch soon.</div>
          </>
        );
      }

    const ContactForm = (

        <Layout>
            <Container>
                <Heading as="h3" align="center" mt={8}>
                    Contacto
                </Heading>
                <Box color="white" borderRadius="lg" align="center" my={4} p={16}>
                    <Box p={4}>
                        <Wrap>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>                             
                                            <form onSubmit={handleSubmit} method="POST" name="contact-form" action="contact/?success=true" data-netlify="true" data-netlify-honeypot="bot-field">
                                            <FormControl id="name">
                                                <FormLabel>Tu nombre</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement pointerEvents="none">
                                                        <BsPerson color="gray.800" />
                                                    </InputLeftElement>
                                                    <Input name="name" required onChange={(e) => setFullname(e.target.value)} type="text" size="md" value={fullname}/>
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="email">
                                                <FormLabel>Correo electrónico</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement pointerEvents="none">
                                                        <MdOutlineEmail color="gray.800" />
                                                    </InputLeftElement>
                                                
                                                    <Input name="email" required onChange={(e) => setEmail(e.target.value)} type="text" size="md" value={email} />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Mensaje</FormLabel>
                                                <Textarea value={message} required onChange={(e) => {setMessage(e.target.value);}}
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}
                                                    placeholder="Escribe tu mensaje"
                                                />
                                            </FormControl>
                                            <FormControl id="name" float="right">
                                                <Box align="center" my={4}>
                                                    <NextLink href="/#" passHref scroll={false}>
                                                        <Button type="submit" rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                                            Enviar mensaje
                                                        </Button>
                                                    </NextLink>
                                                </Box>
                                            </FormControl>
                                            </form>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );

    return (
        <div className="container">
            <main>{formVisible ? ContactForm : ConfirmationMessage}</main>
        </div>
    );
};

export default Contact;