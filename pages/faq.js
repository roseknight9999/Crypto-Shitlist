import Head from 'next/head'
import { CSSReset, Box, Center, Heading, Image, Wrap, Stack, Text, Divider } from '@chakra-ui/react'
import Link from 'next/link'
import Header from './components/header'

export default function Home() {
    return (
        <Box className="main">
            <CSSReset />
            <Header />
            <Stack pb="5" align="center" mx="30%" justify="center">
                <Heading>FAQ</Heading>
                <Divider p="3" />
                <Heading fontSize="2xl" align="center">"What's the point of this site?"</Heading>
                <Text align="center">every fucking sellout piece of animal garbage thats getting into crypto is destroying the world. and, unfortunately, i live there. so here's a handy list to watch out for. i definitely DON'T condone, say, spamming these people, or ruining their lives, or anything, the same way they're ruining everyone else's lives by making computers endlessly compute random nonsense for fake money or fake art. that would be just aaaawful, guys.</Text>
                <Divider p="3" />
                <Heading fontSize="2xl" align="center">"Are there submission guidelines?"</Heading>
                <Text align="center">nah, just @ <a target="_blank" href="https://twitter.com/CryptoShitlist">our twitter</a> with at least a link to what you're talking about. can be a news article, a tweet, whatever. if you have any relevant links to articles or threads that succinctly explain why specific people are jerks, feel free to send those too.</Text>
                <Divider p="3" />
                <Heading fontSize="2xl" align="center">"Huh? What's wrong with NFTs?"</Heading>
                <Text align="center"><a target="_blank" href="https://everestpipkin.medium.com/but-the-environmental-issues-with-cryptoart-1128ef72e6a3">here you go.</a></Text>
                <Divider p="3" />
                <Heading fontSize="2xl" align="center">"But I've already read that article and I don't care!"</Heading>
                <Link href="/fuckyou">some further reading might help.</Link>
                <Divider p="3" />
                <Heading fontSize="2xl" align="center">"I disagree with the existence of this website and want to argue with you about NFTs/bitcoin/crypto/blockchain!"</Heading>
                <Link href="/fuckyou">please direct all inquiries of this nature here.</Link>
                <Divider p="3" />
                <Heading fontSize="2xl" align="center">"Who runs this?"</Heading>
                <Text align="center">idk</Text>
                <Divider p="3" />
                <Heading fontSize="2xl" align="center">"How can I contact you?"</Heading>
                <Text align="center">don't</Text>
                <Divider p="3" />
            </Stack>
        </Box>
    )
}
