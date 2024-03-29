import { HiMail } from 'react-icons/hi'
import { FaPhone, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

import { links } from '@common/lib/constants'

export const FormInput = ({
  name,
  label,
  value,
  type,
  onChange,
  placeholder,
  required,
  ...rest
}) => (
  <div>
    <label
      htmlFor={name}
      className='block text-sm font-medium dark:text-textColor-200 text-gray-700'
    >
      {label}{' '}
      {!rest.passwordMatch &&
        name === 'passwordConfirmation' &&
        value.length !== 0 && (
          <span className='text-red-500'>Passwords do not match</span>
        )}
    </label>
    <div className='mt-1'>
      <input
        id={name}
        name={name}
        type={type}
        disabled={rest.disabled}
        autoComplete={name}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        onKeyUp={rest.handlePasswordMatch}
        value={value}
        className='block w-full border-0 border-b border-transparent dark:bg-background-darkLight bg-gray-50 dark:focus:border-primary-dark rounded-lg focus:border-accent-light focus:text-primary-dark focus:ring-0 sm:text-sm'
      />
    </div>
  </div>
)

export const PhoneInput = ({
  name,
  label,
  value,
  type,
  onChange,
  required,
}) => (
  <div>
    <label
      htmlFor={name}
      className='block text-sm font-medium dark:text-textColor-200 text-gray-700'
    >
      {label}{' '}
    </label>
    <div className='mt-1 relative rounded-md shadow-sm'>
      <div className='absolute inset-y-0 left-0 flex items-center'>
        <label htmlFor='country' className='sr-only'>
          Country
        </label>
        <select
          id='country'
          name='country'
          className='h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 rounded-md focus:ring-0 focus:outline-none focus-offset-0 focus:border-transparent'
        >
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </select>
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        autoComplete='tel'
        required={required}
        className='py-2 dark:bg-background-darkLight border-0 border-transparent border-b px-4 block w-full pl-20 focus:ring-0 focus:outline-none focus-offset-0 dark:focus:border-primary-dark focus:border-accent-light rounded-md'
        placeholder='+1 (555) 987-6543'
      />
    </div>
  </div>
)

export const FormBtn = ({ label, classes, onClick }) => (
  <button
    id='submit'
    type='submit'
    onClick={onClick}
    className={
      classes ||
      'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white dark:bg-primary-dark dark:hover:bg-accent-darker bg-primary-light hover:bg-accent-light'
    }
  >
    {label}
  </button>
)

export const LongFormInput = ({
  name,
  label,
  value,
  onChange,
  required,
  rows,
}) => (
  <div className='sm:col-span-2'>
    <div className='flex justify-between'>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-warm-gray-900'
      >
        {label}
      </label>
      <span id='message-max' className='text-sm text-warm-gray-500'>
        Max. 300 characters
      </span>
    </div>
    <div className='mt-1'>
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        required={required}
        className='py-3 dark:bg-background-darkLight px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-accent-light focus:border-accent-light dark:focus:ring-primary-dark dark:focus:border-primary-dark border border-warm-gray-300 rounded-md'
        aria-describedby='message-max'
      />
    </div>
  </div>
)

export const ContactFormInfo = () => (
  <div className='relative overflow-hidden py-10 px-6 bg-gradient-to-b dark:from-primary-dark dark:to-accent-dark from-primary-light to-accent-light sm:px-10 xl:p-12'>
    {/* Decorative angle backgrounds */}
    <div
      className='absolute inset-0 pointer-events-none sm:hidden'
      aria-hidden='true'
    >
      <svg
        className='absolute inset-0 w-full h-full'
        width={343}
        height={388}
        viewBox='0 0 343 388'
        fill='none'
        preserveAspectRatio='xMidYMid slice'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
          fill='url(#linear1)'
          fillOpacity='.1'
        />
        <defs>
          <linearGradient
            id='linear1'
            x1='254.553'
            y1='107.554'
            x2='961.66'
            y2='814.66'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#fff' />
            <stop offset={1} stopColor='#fff' stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div
      className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
      aria-hidden='true'
    >
      <svg
        className='absolute inset-0 w-full h-full'
        width={359}
        height={339}
        viewBox='0 0 359 339'
        fill='none'
        preserveAspectRatio='xMidYMid slice'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
          fill='url(#linear2)'
          fillOpacity='.1'
        />
        <defs>
          <linearGradient
            id='linear2'
            x1='192.553'
            y1='28.553'
            x2='899.66'
            y2='735.66'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#fff' />
            <stop offset={1} stopColor='#fff' stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div
      className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
      aria-hidden='true'
    >
      <svg
        className='absolute inset-0 w-full h-full'
        width={160}
        height={678}
        viewBox='0 0 160 678'
        fill='none'
        preserveAspectRatio='xMidYMid slice'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
          fill='url(#linear3)'
          fillOpacity='.1'
        />
        <defs>
          <linearGradient
            id='linear3'
            x1='192.553'
            y1='325.553'
            x2='899.66'
            y2='1032.66'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#fff' />
            <stop offset={1} stopColor='#fff' stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <h3 className='text-lg font-medium text-white'>Contact information</h3>
    <p className='mt-6 text-base text-teal-50 max-w-3xl'>
      Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa
      dictumst amet. Sapien tortor lacus arcu.
    </p>
    <dl className='mt-8 space-y-6'>
      <dt>
        <span className='sr-only'>Phone number</span>
      </dt>
      <dd className='flex text-base text-cyan-50'>
        <FaPhone
          className='flex-shrink-0 w-6 h-6 text-cyan-200'
          aria-hidden='true'
        />
        <span className='ml-3'>+1 (555) 123-4567</span>
      </dd>
      <dt>
        <span className='sr-only'>Email</span>
      </dt>
      <dd className='flex text-base text-cyan-50'>
        <HiMail
          className='flex-shrink-0 w-6 h-6 text-cyan-200'
          aria-hidden='true'
        />
        <span className='ml-3'>support@ar.com</span>
      </dd>
    </dl>
    <ul className='mt-8 flex space-x-12'>
      <li>
        <a className='text-cyan-200 hover:text-cyan-100' href={links.instagram}>
          <span className='sr-only'>Instagram</span>
          <FaInstagram
            className='w-7 h-7'
            aria-hidden='true'
            fill='currentColor'
          />
        </a>
      </li>
      <li>
        <a className='text-cyan-200 hover:text-cyan-100' href={links.github}>
          <span className='sr-only'>GitHub</span>
          <FaGithub
            className='w-7 h-7'
            aria-hidden='true'
            fill='currentColor'
          />
        </a>
      </li>
      <li>
        <a className='text-cyan-200 hover:text-cyan-100' href={links.twitter}>
          <span className='sr-only'>Twitter</span>
          <FaTwitter
            className='w-7 h-7'
            aria-hidden='true'
            fill='currentColor'
          />
        </a>
      </li>
    </ul>
  </div>
)
