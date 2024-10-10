import { HStack, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch';

export default function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='10px'>
    <Image src={Logo} boxSize='60px'/>
    <Text> NavBar </Text>
    <ColorModeSwitch />
    </HStack>
  )
}
