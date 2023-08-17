import { Button, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Button>test</Button>
    </MantineProvider>
  </React.StrictMode>
);
