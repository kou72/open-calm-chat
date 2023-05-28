import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>open-calm-chat</title>
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/kou72/open-calm-chat/main/public/open-calm-chat.png"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kou72/open-calm-chat/main/public/open-calm-chat.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kou7273" />
        <meta name="twitter:title" content="open-calm-chat" />
        <meta name="twitter:description" content="open-calm-chat" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kou72/open-calm-chat/main/public/open-calm-chat.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
