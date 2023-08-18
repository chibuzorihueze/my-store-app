import { Button, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom";
import { MantineTheme } from "./config/theme.config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          "ocean-blue": [
            "#7AD1DD",
            "#5FCCDB",
            "#44CADC",
            "#2AC9DE",
            "#1AC2D9",
            "#11B7CD",
            "#09ADC3",
            "#0E99AC",
            "#128797",
            "#147885",
          ],
        },
        fontFamily: "Open Sans, sans-serif",
        colorScheme: "light",
        loader: "bars",
      }}
    >
      <Button color="ocean-blue.6" type="button">
        test
      </Button>
    </MantineProvider>
  </React.StrictMode>
);
