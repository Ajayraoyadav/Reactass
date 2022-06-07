import { Button, Stack } from "@chakra-ui/react";
import React from "react";
 import { MdBuild , MdCall } from "react-icons/md"

export default function Chnavbar() {
  return (
    <div className="mainchnavbar345">
      <div className="navch245">
        <p>Logo</p>
        <p>Inspiration</p>
        <p>Find Work</p>
        <p>Hire Designers</p>
      </div>
      <div>
        <Stack direction="row" spacing={4}>
          <Button  colorScheme="pink" variant="solid">
            Sign In
          </Button>
          <Button  colorScheme="blue" variant="outline">
            Sign Up
          </Button>
        </Stack>
      </div>
    </div>
  );
}
