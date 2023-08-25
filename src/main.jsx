import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { MantineProvider } from "@mantine/core";
import { MantineTheme } from "./config/theme.config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={MantineTheme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
