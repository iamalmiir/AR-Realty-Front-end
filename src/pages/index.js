import { API_URL } from '@lib/constants'
import { fetchListings } from '@common/queries/listings'
import { Spinner } from '@components/app/Spinner'
import { Layout } from '@components/layouts'
import { Home } from '@modules/home/index'

const HomePage = ({ listings }) => {
  if (!listings || listings.length === 0) return <Spinner />

  return (
    <Layout title={'Home'}>
      <Home listings={listings} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const listings = await fetchListings(`${API_URL}/api/listings/random/`)

  return {
    props: {
      listings: listings.results,
    },
    revalidate: 60,
  }
}

export default HomePage
