import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { Provider } from "react-redux";
import { store } from "../features/generator/store";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
