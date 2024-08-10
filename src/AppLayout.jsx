import { Box } from "@chakra-ui/react";
import NavBar from "./features/navbar/Navbar";
import Search from "./features/input field/search";
import Word from "./features/word/Word";
import { useDict } from "./context/DictContext";
import Loader from "./Loader";
import Error from "./Error";

export default function AppLayout() {
  const { wordData, isLoading, error, font, darkMode } = useDict();
  return (
    <Box
      bg={`${darkMode ? "dark.400" : "light.100"}`}
      px={[6, 6, 8, 16, 24]}
      py={[6, 6, 8, 8, 8]}
      h="100vh"
      overflow="scroll"
      fontFamily={font}
    >
      <NavBar />
      <Search />
      {wordData && !isLoading && <Word />}
      {isLoading && <Loader />}
      {error && <Error />}
    </Box>
  );
}
