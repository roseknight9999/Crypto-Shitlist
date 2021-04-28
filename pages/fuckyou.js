import Head from 'next/head'
import { CSSReset, Stack } from '@chakra-ui/react'
import Link from 'next/link'


export default function Home() {
    return (
        <>
            <CSSReset />
            <Stack pt="20" align="center" justify="center">
                <img src={require('../public/images/gfy.jpg')} />
                <br />
                <br />
                <br />
                <img src={require('../public/images/dmat.gif')} />
            </Stack>
        </>
    )
}
