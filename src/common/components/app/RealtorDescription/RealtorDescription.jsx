import { FaPhone } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

import { formatPhoneNumber } from '@lib/helpers'

const RealtorDescription = ({ listing }) => {
  const { realtor } = listing
  return (
    <section className='overflow-hidden'>
      <div className='relative m-12 lg:m-0 max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20'>
        <svg
          className='absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden'
          width={784}
          height={404}
          fill='none'
          viewBox='0 0 784 404'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-primary-light dark:text-primary-dark'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width={784}
            height={404}
            fill='url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)'
          />
        </svg>

        <svg
          className='hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2'
          width={404}
          height={784}
          fill='none'
          viewBox='0 0 404 784'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='56409614-3d62-4985-9a10-7ca758a8f4f0'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-primary-light dark:text-primary-dark'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill='url(#56409614-3d62-4985-9a10-7ca758a8f4f0)'
          />
        </svg>
        <div className='relative lg:flex lg:items-center'>
          <div className='hidden lg:block lg:flex-shrink-0'>
            <Image
              className='h-64 w-64 rounded-full xl:h-80 xl:w-80'
              width={320}
              height={320}
              placeholder='blur'
              blurDataURL={realtor.photo}
              src={realtor.photo}
              alt={realtor.full_name + ' photo'}
            />
          </div>

          <div className='relative lg:ml-10'>
            <svg
              className='absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 144 144'
              aria-hidden='true'
            >
              <path
                strokeWidth={2}
                d='M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z'
              />
            </svg>
            <blockquote className='relative'>
              <div className='text-md leading-9 font-medium dark:text-textColor-100 text-gray-900'>
                <p>{realtor.description}</p>
              </div>
              <footer className='mt-8'>
                <div className='flex-shrink-0 lg:hidden'>
                  <Image
                    className='h-12 w-12 rounded-full'
                    width={64}
                    height={64}
                    placeholder='blur'
                    blurDataURL={realtor.photo}
                    src={realtor.photo}
                    alt={realtor.full_name + ' photo'}
                  />
                </div>
                <Link href={`/realtors/${realtor.slug}`}>
                  <p className='text-base font-medium dark:text-textColor-100 text-gray-500'>
                    {realtor.full_name} |{' '}
                    <strong className='text-primary-light dark:text-primary-dark'>
                      Realtor
                    </strong>
                  </p>
                </Link>
                <br />
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <FaPhone
                      className='h-6 w-6 text-primary-light dark:text-primary-dark'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3 text-base dark:text-textColor-100 text-gray-500'>
                    <p>+1 {formatPhoneNumber(realtor.phone)}</p>
                    <p className='mt-1'>Mon-Fri 8am to 6pm EST</p>
                  </div>
                </div>
                <br />
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <FiMail
                      className='h-6 w-6 text-primary-light dark:text-primary-dark'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3 text-base dark:text-textColor-100 text-gray-500'>
                    <p>{realtor.email}</p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealtorDescription
