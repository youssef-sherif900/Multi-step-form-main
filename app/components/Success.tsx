import React from 'react'
import Thanks from '../assets/Thanks'
import Frame from './Frame'
import MobileFrame from './MobileFrame'

function Success() {
  return (
    <Frame>
      <MobileFrame>
    <div className='h-full py-8 md:py-0  flex flex-col justify-center items-center'>
        <Thanks/>
        <h1 className='text-3xl font-bold text-blue-950 mt-4'>Thank you!</h1>
        <p className='text-center text-gray-400 mt-2 '>Thanks for confirming your subscription! We hope you have
           fun using our platform. if you ever need support, please feel 
           free to email us at support@loremgaming.com
        </p>
    </div>
    </MobileFrame>
    </Frame>
  )
}

export default Success