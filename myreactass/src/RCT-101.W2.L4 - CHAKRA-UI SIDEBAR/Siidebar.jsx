import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";


  export default  function Siidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  return (
    <>
      
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Logo</DrawerHeader>
          <DrawerBody>
            <p>Home</p>
            <p>Treding</p>
            <p>Explore</p>
            <p>Fav</p>
            <p>Setting</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
