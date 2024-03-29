import Image from 'next/image'
import { MdMail, MdLocalPhone } from 'react-icons/md'
import { MvpStar, Verified } from '@components/app/Marks'

const coverPicture = {
  url: 'https://res.cloudinary.com/iamalmiir/image/upload/v1672591034/towfiqu-barbhuiya-05XcCfTOzN4-unsplash_1_kddkly_haluk4.webp',
}
const RealtorDashboard = ({ realtor }) => (
  <>
    <div>
      <Image
        className='h-32 w-full object-cover lg:h-80'
        width={1920}
        height={1080}
        src={coverPicture.url}
        placeholder='blur'
        blurDataURL={coverPicture.url}
        alt={`Cover photo for ${realtor.full_name} profile`}
      />
    </div>
    <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
      <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
        <div className='flex'>
          <Image
            className={`h-24 w-24 rounded-md ring-4 sm:h-32 sm:w-32 ${
              realtor.is_mvp ? 'ring-yellow-400' : 'ring-primary-dark'
            }`}
            width={192}
            height={192}
            src={realtor.photo}
            placeholder='blur'
            blurDataURL={realtor.photo}
            alt={`${realtor.full_name} photo`}
          />
        </div>
        <div className='mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
          <div className='mt-5 min-w-0 flex-1 font-bold sm:hidden md:block'>
            <h1 className='truncate flex items-center text-3xl font-serif dark:text-textColor-100 text-gray-900'>
              {realtor.full_name}
              <Verified />
              {realtor.is_mvp && <MvpStar />}
            </h1>
          </div>
          <div className='justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
            <a
              href={`mailto:${realtor.email}`}
              className='inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2'
            >
              <MdMail
                className='-ml-1 mr-2 h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
              <span>Message</span>
            </a>
            <a
              href={`tel:${realtor.phone}`}
              className='inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2'
            >
              <MdLocalPhone
                className='-ml-1 mr-2 h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>
      <div className='mt-6 hidden min-w-0 flex-1 sm:block md:hidden'>
        <h1 className='truncate text-2xl font-bold text-gray-900'>
          {realtor.full_name}
        </h1>
      </div>
    </div>
  </>
)

export default RealtorDashboard
