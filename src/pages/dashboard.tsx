import { Flex } from '@chakra-ui/react'
<<<<<<< HEAD
import { Sidebar } from '../components/Sidebar'
=======
import { Sidebar } from '../components/Form/Sidebar'
>>>>>>> 116a81c73188a3bbdf48814b39ebebdc485a0ce9
import { Header } from '../components/Header'

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  )
}
