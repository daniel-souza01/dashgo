import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProsp {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProsp) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Daniel Souza</Text>
          <Text color="gray.300" fontSize="small">
            danielsouza51764@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Daniel Souza"
        src="https://github.com/danielsouz4.png"
      />
    </Flex>
  )
}
