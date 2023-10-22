import PageInfo from '@/shared/components/PageInfo'
import classNames from 'classnames'
import React from 'react'

function Page() {
  return (
    <>
      <div className='mb-3'>
        <PageInfo title="Subscription Plans" />
      </div>
      <div className='grid grid-cols-4 gap-6'>
        {
          ['primary', 'success', 'secondary', 'accent'].map(x => <div className='bg-white' key={x}>
            <div className='text-center p-6'>
              <div className='text-2xl'>FREE</div>
              <div className='text-gray-400'>
                Lorem ipsum dolor
              </div>
            </div>
            <div className={classNames('text-center p-6 text-white', {
              'bg-primary': x == 'primary',
              'bg-secondary': x == 'secondary',
              'bg-accent': x == 'accent',
              'bg-success': x == 'success',
            })}>
              <span className='text-3xl'>Rs. 0.00</span>
              <span> / month </span>
            </div>
            <div className='p-6 text-center'>
              <div className='mb-10'>
                <span className='font-semibold'>Free</span>
                <span className='text-gray-500'> advertise </span>
              </div>
              <div className='mb-10'>
                <span className='font-semibold'>Free</span>
                <span className='text-gray-500'> Featured advertise </span>
              </div>
              <div className='mb-10'>
                <span className='font-semibold'>0</span>
                <span className='text-gray-500'> advertise </span>
              </div>
              <div className='mb-10'>
                Unlimited file size upload
              </div>
              <div>
                Dedicated account manager
              </div>

            </div>
            <div className='border-t p-6 text-center'>
              <button className={classNames('btn text-center rounded-3xl px-6 text-white', {
                'btn-primary': x == 'primary',
                'btn-secondary': x == 'secondary',
                'btn-accent': x == 'accent',
                'btn-success': x == 'success',
              })}>
                Subscribe
              </button>
            </div>
          </div>)
        }

      </div>
    </>
  )
}

export default Page