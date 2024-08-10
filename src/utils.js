import axios from "axios";

export async function fetchWord(word) {
  const response = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  return response.data;
}
