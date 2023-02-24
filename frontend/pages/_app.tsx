import "../styles/output.css";
import "../styles/loading.css";
import "../styles/bootstrap-icons.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
