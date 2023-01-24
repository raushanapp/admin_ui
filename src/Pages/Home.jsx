import React from 'react'
import {Stack,Flex,Space, Text, Heading} from "@chakra-ui/react"
import SearchByNameOrRole from '../Components/SearchByNameOrRole'
function Home() {
  return (
    <Stack
      direction='column'
      spacing={4}
    >
      <Heading>Home</Heading>
      {/* import here search components */}
      <SearchByNameOrRole />
    </Stack>
  )
}

export default Home