import React from 'react';
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

// Este arquivo previne falhas entre o React e Styled-components,
// O carregamento do estilo oscila bastante
// Ref: https://dev.to/rsanchezp/next-js-and-styled-components-style-loading-issue-3i68

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
