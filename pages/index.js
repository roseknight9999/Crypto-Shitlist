import Head from 'next/head'
import { CSSReset, Box, Center, Heading, Divider, Image, Wrap, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Header from './components/header'

import shitlist from "../public/shitlist.json";
//console.log(shitlist);

function createMarkup() {
  // index names only handling

  // full index handling
  var output = "<div class='wrapper'>";
  for (var i = 0; i < shitlist.shitlords.length; i++) {
    output += "<div class='border'><div class='flex'>";
    output += "<h1 style='padding:1rem;font-size:3rem;font-weight:bold'>" + shitlist.shitlords[i].name + "</h1>";
    output += "<img style='width:15%;height:15%;' src='" + shitlist.shitlords[i].avatar + "' /></div><p>" + shitlist.shitlords[i].desc + "</p>";

    if (shitlist.shitlords[i].tweetlink != "") {
      output += "<Text> • </Text><a target='_blank' href='" + shitlist.shitlords[i].tweetlink + "'>tweet</a>"
    }
    if (shitlist.shitlords[i].nftlink != "") {
      output += "<Text> • </Text><a target='_blank' href='" + shitlist.shitlords[i].nftlink + "'>nft</a>"
    }

    if (shitlist.shitlords[i].articlelink != "") {
      output += "<Text> • </Text><a target='_blank' href='" + shitlist.shitlords[i].articlelink + "'>article</a>"
    }
    if (shitlist.shitlords[i].jerklink != "") {
      output += "<Text> • </Text><a target='_blank' href='" + shitlist.shitlords[i].jerklink + "'>jerk info</a>"
    }

    output += "<Text> • </Text></div>";

    if (shitlist.shitlords[i].date != "") {
      output += "<br/><p style='color:gray;'>" + shitlist.shitlords[i].date + "'</p>"
    }
  }


  output += "</div>";

  return { __html: output };
}

function Index() {
  return <Center dangerouslySetInnerHTML={createMarkup()} />;
}

export default function Home() {
  return (
    <Box className="main">
      <CSSReset />
      <Header />
      <Center pb="2">
        <Heading>latest shitlords</Heading>
      </Center>
      <Divider />
      <Center>
        <Index />
      </Center>
      <Divider />
      <Center pb="5" pt="2">
        <Heading>full list</Heading>
      </Center>
      <Center pb="5">
        <Text>TODO; make searchable, and also put a link index of just names</Text>
      </Center>
      <Center>
        <Index />
      </Center>
    </Box>
  )
}
