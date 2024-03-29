import type { AppProps } from 'next/app'
import 'bulma/css/bulma.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
