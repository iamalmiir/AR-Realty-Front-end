import Link from 'next/link'

const NoResults = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-center text-2xl font-bold leading-7 text-gray-500'>
        No results found
      </h2>
      <p className='text-center text-gray-500'>
        Try a different search term or visit the{' '}
        <Link
          href='/listings'
          className='text-accent-light hover:text-accent-light'
        >
          listings page
        </Link>
        .
      </p>
    </div>
  )
}

export default NoResults
