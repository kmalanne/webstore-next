import { FC } from "react";
import type { AppProps } from "next/app";
import { Head } from "@components/common";
import { UIContext } from "@components/ui/context";

const Noop: FC = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <UIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </UIContext>
    </>
  );
}
