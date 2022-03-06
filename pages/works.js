import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbmatrix from '../public/images/works/matrix.png'
import thumbbrowser from '../public/images/works/browser.png'
import thumbcontactlist from '../public/images/works/contactlist.jpg'
const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.1}>
                    <WorkGridItem id="matrix" title="Matrix table" thumbnail={thumbmatrix}>
                        This is a program to create matrix table which use number from user-input developed by C
                    </WorkGridItem>
                </Section>

                <Section delay={0.2}>
                    <WorkGridItem id="browser" title="Browser-clone" thumbnail={thumbbrowser}>
                        This is a clone browser developed by C#
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="contactlist" title="My-contactlist" thumbnail={thumbcontactlist}>
                        This is a mobileapp  that use for save phone number developed by Flutter
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works
export { getServerSideProps } from '../components/chakra'