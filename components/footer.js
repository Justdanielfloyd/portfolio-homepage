import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Daniel Pinzón. Todos los derechos reservados.
    </Box>
  )
}

export default Footer
