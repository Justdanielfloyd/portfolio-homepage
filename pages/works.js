import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbToreteSorteos from '../public/images/works/toretesorteos_01.png'
import thumbNikeRun from '../public/images/works/nikerun_01.png'
import thumbDisservicios from '../public/images/works/disservicios_01.png'


const Works = () => (
  <Layout title="Trabajos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Trabajos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="toretesorteos" title="Torete Sorteos" thumbnail={thumbToreteSorteos}>
          Página web de sorteos con sistema de tickets personalizado.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="nikerun"
            title="NikeRun"
            thumbnail={thumbNikeRun}
          >
            Landing Page experimental para zapatillas running.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="disservicios" thumbnail={thumbDisservicios} title="Disservicios">
            Empresa dedicada a prestar Soluciones integrales en el área de la construcción.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
