import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/system";

import MainLayout from "../layouts/MainLayout";
import { theme } from "../theme";

import "../styles/globals.css";
import "../helpers/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
