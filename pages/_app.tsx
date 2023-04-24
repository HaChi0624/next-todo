import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import { RecoilRoot } from "recoil";

type Props = {
  children: JSX.Element;
};

const Auth = ({ children }: Props): JSX.Element => {
  const isLoading = useAuth();

  return isLoading ? <p>Loading...</p> : children;
};

 const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;