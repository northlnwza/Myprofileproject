import NextLink from 'next/link'
import { Container , Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection , BioYear } from "../components/bio"
import { GridItem } from '../components/grid-item'
import {
    IoLogoTwitter , 
    IoLogoInstagram ,
    IoLogoGithub , 
    IoLogoDiscord 
} from 'react-icons/io5'

import thumbYouTube from '../public/images/links/youtube.jpg'



const Page = () => {
    return (
        <Layout>
    <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Hello, I&apos;m a highschool student form Thailand!
        </Box>

        <Box display={{ md:'flex' }}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Thanakrit Jomhong
                </Heading>
                <p>(Highschool Student / Script Kiddies / wanna be programmer)</p>

            </Box>
            <Box 
            flexShrink={0} 
            mt={{base: 4, md: 0}} 
            ml={{md: 6}} 
            align="center"
            >
                <Image 
                borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth="100px" 
                display="inline-block" 
                borderRadius="full" 
                src="/images/north.jpg" 
                alt="Profile Image" />
            </Box>

        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>
                Thanakrit is a Highschool student who want to be programmer and he has developed a side project in freetime by build this website that clone form{' '}<Link href="https://youtu.be/bSMZgXzC9AA" target="_blank">devaslife</Link>.
                 
                
            </Paragraph>
            <Box align="center" my={4}>
                 <NextLink href="/works">
                     <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                         My portfolio
                         </Button>
                </NextLink>
            </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>2006</BioYear>
                Born in Bangkok (กรุงเทพมหานครฯ), Thailand.
            </BioSection>
            <BioSection>
                <BioYear>2017</BioYear>
                graduated primary school and start learning programming.
            </BioSection>
            <BioSection>
                <BioYear>2018 to present</BioYear>
                Studying in highschool.
            </BioSection>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                I like to
            </Heading>
            <Paragraph>
                Listen music, Playing video game,{' '}<Link href="https://github.com/northlnwza" target="_blank">Coding</Link>
            </Paragraph>
        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/northlnwza" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                @krothorne
                                </Button>
                            </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="https://twitter.com/nlz_tj" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                                @nlz_tj
                                </Button>
                            </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="https://www.instagram.com/krothorne/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                                @krothorne
                                </Button>
                            </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="https://discord.com/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
                                Discord
                                </Button>
                            </Link>
                    </ListItem>
                </List>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem href="https://www.youtube.com/channel/UC-QdlnFh9CEnboJfmkt46QA" titel="TJ-NLZ" thumbnail={thumbYouTube}>My Youtube channel</GridItem>
                    
                    </SimpleGrid>
            </Section>



        </Container>
        </Layout>
    )
}

export default Page

