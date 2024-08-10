import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { useBoolean } from "@chakra-ui/react";
import { fetchWord } from "../utils";

const dictContext = createContext();

DictContext.propTypes = {
  children: PropTypes.node.isRequired,
};

function DictContext({ children }) {
  const [darkMode, setDarkMode] = useBoolean(false);
  const [font, setFont] = useState("sans-serif");
  const [wordData, setWordData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleWord(word) {
    try {
      setIsLoading(true);
      const [response] = await fetchWord(word);
      setWordData(response);
    } catch (err) {
      setError(true);
      setWordData(null);
    } finally {
      setIsLoading(false);
    }
  }

  function handleDarkMode() {
    setDarkMode.toggle();
  }

  function handleFont(font) {
    setFont(font);
  }

  return (
    <dictContext.Provider
      value={{
        darkMode,
        handleDarkMode,
        font,
        handleFont,
        wordData,
        handleWord,
        isLoading,
        error,
        setError,
      }}
    >
      {children}
    </dictContext.Provider>
  );
}

function useDict() {
  const context = useContext(dictContext);
  return context;
}

export { useDict, DictContext };
