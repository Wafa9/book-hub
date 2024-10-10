import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import Theme from '../Theme';
import { useState } from 'react';


export default function ColorModeSwitch() {
    // const [toggle, useToggle]= useState(false);
    const {toggleColorMode, colorMode} = useColorMode();
  return (
   <HStack>
   <Switch id="theme" isChecked={colorMode === 'dark'} onChange={toggleColorMode} size='md' colorScheme='green'/>
   <Text>Dark Mode</Text>
   </HStack>
  )
}
