import type { VFC } from "react";

const Head: VFC = () => {
  return (
    <>
      <title>Webstore</title>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default Head;
