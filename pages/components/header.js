import { CSSReset, Box, Center, Heading, Wrap, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <CSSReset /><Center>
                <Box align="center" justify="center">
                    <Heading p="5" size="4xl">crypto shitlist</Heading>
                    <p>a list of the corporations and cunts destroying the environment for their ponzi scheme.</p>
                </Box>
            </Center>
            <Wrap align="center" justify="center" fontSize="sm">
                <Text> • </Text>
                <Link href="/">home</Link>
                <Text> • </Text>
                <a target="_blank" href="https://twitter.com/CryptoShitlist">submit</a>
                <Text> • </Text>
                <Link href="/faq">faq</Link>
                <Text> • </Text>
            </Wrap>
            <br />
        </>
    )
}
