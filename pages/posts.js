import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { GridItem } from "../components/grid-item"


import thumbdance from '../public/images/contents/dance.png'
import thumbrov1 from '../public/images/contents/rov_ep1.png'
import thumbrov2 from '../public/images/contents/rov_ep2.png'
import thumblol from '../public/images/contents/lol.png'
const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6} >
                    <GridItem title="งานปฐมนิเทศม.1(เต้นปิดงาน)"
                    thumbnail={thumbdance}
                    href="https://www.youtube.com/watch?v=naxTlVJIl2o"
                    />

                    <GridItem title="ROV by gtnz EP. 1"
                    thumbnail={thumbrov1}
                    href="https://www.youtube.com/watch?v=aPbmk385oMU"
                    />

                    <GridItem title="ROV by GTNZ EP. 2"
                    thumbnail={thumbrov2}
                    href="https://www.youtube.com/watch?v=oH4A9AwCfsQ"
                    />

                    <GridItem title="LOL Hightlight-1 by TJ-NLZ"
                    thumbnail={thumblol}
                    href="https://www.youtube.com/watch?v=oDhStuJX7dc"
                    />

                    </SimpleGrid>
                </Section>
        </Container>
    </Layout>
)

export default Posts