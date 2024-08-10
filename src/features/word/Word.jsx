import { Box, Button, Divider, Link, Text } from "@chakra-ui/react";
import { useDict } from "../../context/DictContext";
import Meanings from "./Meanings";
import { useRef } from "react";

export default function Word() {
  const { wordData, darkMode } = useDict();
  const audioRef = useRef(null);
  const urlRef = useRef(null);

  if (wordData.phonetics.length > 0) {
    wordData.phonetics.map((url) => {
      if (url.audio) {
        urlRef.current = url.audio;
      }
    });
  } else {
    urlRef.current = "";
  }

  console.log(urlRef.current);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.src = urlRef.current;
      audioRef.current.play();
    }
  };

  return (
    <Box className={`${darkMode ? "text-white" : "text-black"}`}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt="24px"
      >
        <Box>
          <h1 className={`font-bold text-[32px] mb-[8px] capitalize`}>
            {wordData?.word}
          </h1>
          <Text color="brand.100" fontSize="22px">
            {wordData?.phonetic}
          </Text>
        </Box>

        {urlRef.current && (
          <>
            <Button
              width="56px"
              height="56px"
              rounded="50px"
              bg="brand.100"
              opacity={0.6}
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{
                opacity: 1,
              }}
              _active={{
                opacity: 0.6,
              }}
              onClick={playSound}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`h-7 w-7 ${
                  darkMode ? "stroke-black" : "stroke-white"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </Button>
            <audio ref={audioRef}>
              <source src={urlRef.current} type="audio/mpeg" />
            </audio>
          </>
        )}
      </Box>

      {wordData?.meanings.map((data, index) => {
        return <Meanings data={data} key={index} />;
      })}

      <Divider bg={`${darkMode ? "dark.400" : "light.400"}`} />
      <Box mt="32px">
        <Text
          display="inline-block"
          color="light.400"
          borderBottom="1px solid #757575"
          fontSize="20px"
          lineHeight="23px"
        >
          Source
        </Text>
        {wordData.sourceUrls.map((url, index) => (
          <Box
            display="flex"
            alignItems="center"
            gap="8px"
            key={index}
            mt="10px"
          >
            <Text fontSize="16px">
              <Link href={url} isExternal>
                {url}
              </Link>
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 stroke-stone-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
