// components/ContactForm.js

import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Layout from "../components/layouts/article";
import {
    Container, Box, Heading,
    VStack, Wrap, WrapItem, FormControl,
    FormLabel, Input, InputGroup, InputLeftElement, Textarea,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { MdOutlineEmail, } from 'react-icons/md';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data) {
    axios
      .post("https://eoa2ze0905pvmxl.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `¡Gracias por tu mensaje! 😊 Pronto me pondré en contacto contigo.`
        );
        return response
      })
      .catch((e) => console.error(e));
  }

  return (
    <Layout>
        <Container>
            <Heading as="h3" alignContent="center" mt="8">
                Contacto
            </Heading>
            <Box color="white" borderRadius="lg" align="center" my={4} p={16}>
                <Box p={4}>
                    <Wrap>
                        <WrapItem>
                            <Box bg="white" borderRadius="lg">
                                <Box m={8} color="#0B0E3F">
                                <VStack spacing={5}>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <FormControl id="name">
                                            <FormLabel>Tu nombre</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement pointerEvents="none">
                                                    <BsPerson color = "gray.800"/>
                                                </InputLeftElement>
                                                <Input {...register("name")} name="name" required type="text" size="md" />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl id="email">
                                            <FormLabel>Correo electrónico</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement pointerEvents="none">
                                                    <MdOutlineEmail color="gray.800" />
                                                </InputLeftElement>
                                                <Input {...register("email")} name="email" required type="text" size="md" />
                                            </InputGroup>
                                        </FormControl>
                                        <FormLabel>Mensaje</FormLabel>
                                                <Textarea required
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}
                                                    placeholder="Escribe tu mensaje"
                                                />
                                        <FormControl id="mensaje">
                                            
                                        </FormControl>

                                    <button role="submit" rightIcon={<ChevronRightIcon />}>{isSubmitting ? "Enviando mensaje..." : "Enviar"}</button>
                                    {successMessage && <p>{successMessage}</p>}
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
}


