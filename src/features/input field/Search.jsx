import { Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useDict } from "../../context/DictContext";
import { useState } from "react";

export default function Search() {
  const { darkMode, handleWord, setError } = useDict();
  const [searchResult, setSearchResult] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    if (searchResult === "") {
      setIsEmpty(true);
      return;
    }
    handleWord(searchResult);
    setSearchResult("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <InputGroup mt="24px">
        <Input
          placeholder="Search for any word..."
          size="lg"
          value={searchResult}
          onChange={(e) => {
            setSearchResult(e.target.value);
            setIsEmpty(false);
          }}
          bg={`${darkMode ? "dark.300" : "light.200"}`}
          border="1px solid transparent"
          color={`${darkMode ? "light.100" : "dark.400"}`}
          focusBorderColor={`${!isEmpty ? "brand.100" : "error.100"}`}
        />
        <InputRightElement mt="4px" onClick={(e) => handleSubmit(e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-purple-500 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </InputRightElement>
      </InputGroup>
      {isEmpty && (
        <Text color="error.100" mt="5px" fontWeight="bold">
          {"Whoops! Can't be empty..."}
        </Text>
      )}
    </form>
  );
}
