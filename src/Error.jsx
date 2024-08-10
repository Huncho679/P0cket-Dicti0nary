import { Box, Text } from "@chakra-ui/react";
import { useDict } from "./context/DictContext";

export default function Error() {
  const { darkMode } = useDict();
  return (
    <Box className="flex flex-col items-center justify-center h-[80%] text-center gap-[10px]">
      <Text className="text-[96px]">😢</Text>
      <Text fontWeight="bold" color={`${darkMode ? "white" : "black"}`}>
        No Definitions Found
      </Text>
      <Text color="light.400" className="text-[18px]">
        {
          "Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead"
        }
      </Text>
    </Box>
  );
}
