import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { HeaderNav } from "../components/HeaderNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <HeaderNav />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
