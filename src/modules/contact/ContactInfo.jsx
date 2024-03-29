import { MdEmail, MdLocalPhone } from 'react-icons/md'

const ContactInfo = () => {
  return (
    <div className='max-w-7xl shadow-lg dark:shadow-black rounded-lg mx-auto py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8'>
        <div>
          <h2 className='text-2xl font-extrabold dark:text-primary-dark text-gray-900 sm:text-3xl'>
            Sales Support
          </h2>
          <div className='mt-3'>
            <p className='text-lg dark:text-textColor-100 text-gray-500'>
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
          <div className='mt-9'>
            <div className='flex'>
              <div className='flex-shrink-0'>
                <MdLocalPhone
                  className='h-6 w-6 text-primary-light dark:text-primary-dark'
                  aria-hidden='true'
                />
              </div>
              <div className='ml-3 text-base dark:text-textColor-100 text-gray-500'>
                <p>+1 (555) 123 4567</p>
                <p className='mt-1'>Mon-Fri 8am to 6pm PST</p>
              </div>
            </div>
            <div className='mt-6 flex'>
              <div className='flex-shrink-0'>
                <MdEmail
                  className='h-6 w-6 text-primary-light dark:text-primary-dark'
                  aria-hidden='true'
                />
              </div>
              <div className='ml-3 text-base dark:text-textColor-100 text-gray-500'>
                <p>sales@ar.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 sm:mt-16 md:mt-0'>
          <h2 className='text-2xl font-extrabold dark:text-primary-dark text-gray-900 sm:text-3xl'>
            Technical Support
          </h2>
          <div className='mt-3'>
            <p className='text-lg dark:text-textColor-100 text-gray-500'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              repellat error corporis doloribus similique, voluptatibus numquam
              quam, quae officiis facilis.
            </p>
          </div>
          <div className='mt-9'>
            <div className='flex'>
              <div className='flex-shrink-0'>
                <MdLocalPhone
                  className='h-6 w-6 text-primary-light dark:text-primary-dark'
                  aria-hidden='true'
                />
              </div>
              <div className='ml-3 text-base dark:text-textColor-100 text-gray-500'>
                <p>+1 (555) 123 4567</p>
                <p className='mt-1'>Mon-Fri 8am to 6pm PST</p>
              </div>
            </div>
            <div className='mt-6 flex'>
              <div className='flex-shrink-0'>
                <MdEmail
                  className='h-6 w-6 text-primary-light dark:text-primary-dark'
                  aria-hidden='true'
                />
              </div>
              <div className='ml-3 text-base dark:text-textColor-100 text-gray-500'>
                <p>techsupport@ar.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
