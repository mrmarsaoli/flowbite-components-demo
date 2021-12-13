import { AppProps } from 'next/app'
// import 'bw-components/dist/styles/utilities-only.css'
import '../styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
