import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ToreteSorteos">
    <Container>
      <Title>
        ToreteSorteos <Badge>2021-</Badge>
      </Title>
      <P>
        Página web de sorteos con sistema de tickets personalizado.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://toretesorteos.com/">
            https://toretesorteos.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, WordPress</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Justdanielfloyd/toretesorteos.com">
          github.com/Justdanielfloyd/toretesorteos.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/toretesorteos_01.png" alt="ToreteSorteos" />
      <WorkImage src="/images/works/toretesorteos_02.png" alt="ToreteSorteos" />
      <WorkImage src="/images/works/toretesorteos_03.png" alt="ToreteSorteos" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
