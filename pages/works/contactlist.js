import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Works = () => {
    return (
        <Layout title="My-contactlist">
            <Container>
                <Title>
                   My-contactlist <Badge>2020</Badge>
                </Title>
                <P>
                My-contactlist was developed by Flutter that is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Mobile app</Meta>
                        <Link href="https://flutter.dev/">
                        https://flutter.dev/<ExternalLinkIcon mx="2px" />               
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Mobile app</Meta>
                        <span>IOS/Android/</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Flutter</span>
                    </ListItem>

                </List>

                <WorkImage src="/images/works/contactlist.jpg" alt="contactlist" />
            </Container>
        </Layout>
    )
}

export default Works