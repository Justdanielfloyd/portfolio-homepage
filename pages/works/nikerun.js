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
  <Layout title="NikeRun">
    <Container>
      <Title>
        NikeRun <Badge>2022 (Experimental)</Badge>
      </Title>
      <P>
        Landing page para zapatillas estilo running "NikeRun". Esta página web es <b>experimental</b>. 
      </P>
      <P>
        Creada bajo el concepto Mobile First, sin frameworks ni ningún tipo de librería.
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
          <Link href="https://github.com/Justdanielfloyd/nikerun">
          github.com/Justdanielfloyd/nikerun <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/nikerun_01.png" alt="nikerun" />
        <WorkImage src="/images/works/nikerun_02.png" alt="nikerun" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
