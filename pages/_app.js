import { Layout } from '../components/Layout';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout >
    </NextUIProvider>
  );
}

export default MyApp;
