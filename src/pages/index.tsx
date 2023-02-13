import { Inter } from '@next/font/google'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <Flex color="white" direction="column" alignItems="center">
      <Flex alignItems="center" justifyContent="center" width="full" height={300}>
        <Text>Subtitle Sync</Text>
      </Flex>
      <Flex maxWidth={400} alignItems="center" direction="column">
      <Input placeholder='video url' mb={3} onChange={() => {}}/>
      <Input placeholder='subtitles' mb={3} onChange={() => {}}/>
      <Button variant="outline">Synchronise</Button>
      </Flex>
    </Flex>
    </>
  )
}
