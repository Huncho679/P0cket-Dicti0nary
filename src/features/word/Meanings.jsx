import { Box, Divider, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useDict } from "../../context/DictContext";

export default function Meanings({ data }) {
  const { darkMode, handleWord } = useDict();
  return (
    <Box my="16px">
      <Box display="flex" alignItems="center" gap="21px" mb="16px">
        <Text as="i" fontSize="18px" fontWeight="bold">
          {data.partOfSpeech}
        </Text>
        <Divider bg={`${darkMode ? "dark.400" : "light.400"}`} />
      </Box>

      <Box>
        <Text color="light.400" fontSize="20px" mb="16px">
          Meaning
        </Text>
        <UnorderedList color="brand.100">
          {data.definitions.map((definition, index) => {
            return (
              <ListItem key={index} pl="8px" mb="12px">
                <Text
                  as="span"
                  color={`${darkMode ? "white" : "black"}`}
                  fontSize="18px"
                >
                  {definition.definition}
                </Text>
              </ListItem>
            );
          })}
        </UnorderedList>
        {data.synonyms.length > 0 && (
          <Text color="light.400" fontSize="20px" mb="16px">
            Synonyms:{" "}
            {data.synonyms.map((synonym, index) => (
              <Text as="span" key={index} color="brand.100" fontWeight="bold">
                <Text
                  as="span"
                  _hover={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleWord(synonym);
                  }}
                >
                  {synonym}
                </Text>{" "}
              </Text>
            ))}
          </Text>
        )}
      </Box>
    </Box>
  );
}
