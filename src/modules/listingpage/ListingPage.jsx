import useSWR from 'swr'
import dynamic from 'next/dynamic'
import { Tab } from '@headlessui/react'
import { MdPool } from 'react-icons/md'
import { GrLocationPin } from 'react-icons/gr'
import { useEffect, useContext, useState } from 'react'
import { GiTennisCourt, GiGardeningShears } from 'react-icons/gi'

import ImageSwiper from '@hooks/ImageSwiper'
import AuthContext from '@context/AuthContext'
import { MapBox } from '@components/app/MapBox'
import { Divider } from '@components/app/Divider'
import { Spinner } from '@components/app/Spinner'
import { formatPrice, classNames } from '@lib/helpers'
import { FeaturedListings } from '@components/app/FeaturedListings'
import { ListingPageDetails } from '@components/app/ListingPageDetails'
import { isInquiryMade } from '@common/queries/listings'
import { RealtorDescription } from '@components/app/RealtorDescription'

const InquiryForm = dynamic(() => import('@components/app/Forms/InquiryForm'), {
  ssr: false,
  loading: () => <Spinner />,
})

const InquiryMade = dynamic(
  () => import('@components/app/InquiryMade/InquiryMade'),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
)
const UserNotSigned = dynamic(
  () => import('@components/app/InquiryMade/UserNotSigned'),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
)

const ListingPage = ({ slug, currentListing, featuredListings }) => {
  const [fullDescription, setFullDescription] = useState(false)
  const [listing, setListing] = useState(currentListing)
  const [inquiryMade, setInquiryMade] = useState(false)
  const { user: authUser } = useContext(AuthContext)
  const { data } = useSWR(
    authUser ? `/api/inquiries?id=${currentListing.id}` : null,
    isInquiryMade
  )

  useEffect(() => {
    setListing(currentListing)
    data && setInquiryMade(data.resData)
    console.log(data)
  }, [slug, authUser])

  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl'>
      <div className=' lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
        {/* Image gallery */}
        <Tab.Group as='div' className='flex flex-col-reverse'>
          <Tab.Panels className='w-full aspect-w-1 aspect-h-1'>
            <ImageSwiper listing={listing} />
          </Tab.Panels>
        </Tab.Group>

        {/* Listing info */}
        <div className='mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0'>
          <h1 className='text-3xl font-extralight tracking-tight text-gray-900'>
            {listing.title}
          </h1>

          <div className='mt-3'>
            <h2 className='sr-only'>Listing information</h2>
            <p className='text-3xl font-extrabold text-gray-900'>
              {formatPrice(listing.price)}
            </p>
          </div>
          <section aria-labelledby='details-heading' className='mt-12'>
            <h2 id='details-heading' className='sr-only'>
              Additional details
            </h2>
            <div className='relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'>
              <div className='flex items-center'>
                <span
                  className={classNames(
                    'rounded-lg inline-flex p-3 ring-4 ring-white'
                  )}
                >
                  <GrLocationPin className='h-6 w-6' aria-hidden='true' />
                </span>
                <address className='ml-4 text-gray-900 font-bold'>
                  {listing.address}, {listing.city}, {listing.state},{' '}
                  {listing.zipcode}
                </address>
              </div>
              {listing.pool && (
                <div className='flex items-center'>
                  <span
                    className={classNames(
                      'rounded-lg inline-flex p-3 ring-4 ring-white'
                    )}
                  >
                    <MdPool className='h-6 w-6' aria-hidden='true' />
                  </span>
                  <span className='ml-4 text-gray-900 font-bold'>
                    Pool 10 x 20
                  </span>
                </div>
              )}
              <div className='flex items-center'>
                <span
                  className={classNames(
                    'rounded-lg inline-flex p-3 ring-4 ring-white'
                  )}
                >
                  <GiTennisCourt className='h-6 w-6' aria-hidden='true' />
                </span>
                <span className='ml-4 text-gray-900 font-bold'>
                  Tennis court
                </span>
              </div>
              <div className='flex items-center'>
                <span
                  className={classNames(
                    'rounded-lg inline-flex p-3 ring-4 ring-white'
                  )}
                >
                  <GiGardeningShears className='h-6 w-6' aria-hidden='true' />
                </span>
                <span className='ml-4 text-gray-900 font-bold'>Garden</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Divider text={'About the Listing'} />
      {/* Details such as cooling, heating, built year etc...  */}
      <ListingPageDetails listing={listing} classNames={classNames} />
      <div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
        <div className='relative'>
          <span className='inline-flex items-center px-2.5 py-2.5 rounded-md text-xs bg-gray-300 text-black font-bold'>
            DESCRIPTION
          </span>
          <p className='mt-6 text-lg font-medium text-gray-600 max-w-lg'>
            {fullDescription
              ? listing.description
              : `${listing.description.slice(0, 200)}...`}
          </p>
          <br />
          <button
            onClick={() => setFullDescription(!fullDescription)}
            className='text-sm border p-1 mb-8 lg:mb-0 font-semibold text-primaryDark hover:bg-gray-200'
          >
            {fullDescription
              ? 'HIDE FULL DESCRIPTION'
              : 'READ FULL DESCRIPTION'}
          </button>
        </div>
        <div className='relative'>
          <MapBox listing={listing} />
        </div>
      </div>
      <div className='bg-white lg:py-24 my-12'>
        <RealtorDescription listing={listing} />
      </div>
      {authUser && !inquiryMade && (
        <InquiryForm listing={listing} user={authUser} />
      )}
      {!authUser && <UserNotSigned />}
      {inquiryMade && <InquiryMade />}

      {featuredListings && featuredListings.length > 0 && (
        <FeaturedListings featuredListings={featuredListings} />
      )}
    </div>
  )
}

export default ListingPage
