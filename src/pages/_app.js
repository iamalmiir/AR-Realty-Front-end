import '../styles/dist.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@fontsource/montserrat'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'
import { Analytics } from '@vercel/analytics/react'

import { AuthProvider } from '@context/AuthContext'
const AOS = dynamic(() => import('@components/app/CustomAOS/CustomAOS'))

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <AOS />
      <AuthProvider>
        <Component {...pageProps} />
        <Analytics />
      </AuthProvider>
    </Fragment>
  )
}

export default MyApp
