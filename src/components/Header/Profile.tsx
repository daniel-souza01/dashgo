import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Daniel Souza</Text>
        <Text color="gray.300" fontSize="small">
          danielsouza51764@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Daniel Souza"
        src="https://github.com/danielsouz4.png"
      />
    </Flex>
  )
}
