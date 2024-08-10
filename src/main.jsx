import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { DictContext } from "./context/DictContext.jsx";

const theme = extendTheme({
  colors: {
    dark: {
      400: "#050505",
      300: "#1F1F1F",
      200: "#2D2D2D",
      100: "#3A3A3A",
    },
    light: {
      400: "#757575",
      300: "#E9E9E9",
      200: "#F4F4F4",
      100: "#FFFFFF",
    },
    brand: {
      100: "#A445ED",
    },
    error: {
      100: "#FF5252",
    },
  },
  fonts: {
    heading: `'sans-serif', 'serif' , 'mono', sans-serif`,
    body: `'sans-serif', 'serif' , 'mono', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <DictContext>
        <App />
      </DictContext>
    </ChakraProvider>
  </React.StrictMode>
);
