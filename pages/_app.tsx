import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { HeaderNav } from "../components/header/HeaderNav";
import { ThemeProvider } from "next-themes";
import { darkTheme } from "../styles/stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider
        attribute="class"
        value={{ light: "light", dark: darkTheme }}
      >
        <HeaderNav />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
