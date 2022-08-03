import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        
        <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-44QSC91C6E`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-44QSC91C6E', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
