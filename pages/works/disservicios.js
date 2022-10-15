import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Disservicios">
    <Container>
      <Title>
       Disservicios <Badge>2015</Badge>
      </Title>
      <P>
      Empresa dedicada a prestar Soluciones integrales en el área de la construcción. 
      Ejecutando desde estructuras básicas hasta acabados en obra blanca, así mismo realizamos mantenimiento de fachadas.
      </P>
    

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, WordPress</span>
        </ListItem>
        
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Justdanielfloyd/disservicios">
          github.com/Justdanielfloyd/disservicios <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/disservicios_01.png" alt="disservicios" />
      <SimpleGrid columns={1}>
        <WorkImage src="/images/works/disservicios_02.png" alt="disservicios" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
