import { HStack, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.webp'

export default function NavBar() {
  return (
    <HStack>
    <Image src={Logo} boxSize='60px'/>
    <Text> NavBar </Text>
    </HStack>
  )
}
