import { Button, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { MantineTheme } from "./config/theme.config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Open Sans, sans serif",
        colorScheme: "light",
        loader: "bars",
      }}
    >
      <Button>test</Button>
    </MantineProvider>
  </React.StrictMode>
);
