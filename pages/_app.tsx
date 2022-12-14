import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { HeaderNav } from "../components/header/HeaderNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <HeaderNav />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
