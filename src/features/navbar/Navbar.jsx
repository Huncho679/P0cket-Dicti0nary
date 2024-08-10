import { Box, HStack } from "@chakra-ui/react";
import Logo from "./Logo";
import FontOptions from "./FontOptions";
import ToggleDarkMode from "./ToggleDarkMode";

//import { HStack } from "@chakra-ui/react";
export default function NavBar() {
  return (
    <HStack h="5%" justifyContent='space-between'>
      <Logo />

      <Box display="flex" gap="16px" h="100%">
        <FontOptions />
        <Box w="1px" h="100%" bg="light.300"></Box>
        <ToggleDarkMode />
      </Box>
    </HStack>
  );
}
