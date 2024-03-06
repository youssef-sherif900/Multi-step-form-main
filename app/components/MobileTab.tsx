import Link from 'next/link'
import React, { ReactNode } from 'react'

type mobileTabProps ={
    children:ReactNode
}

function MobileTab({children }:mobileTabProps) {
  return (
    <div className="md:hidden bg-white h-24 w-full absolute bottom-0 flex">
        {children}
  </div>
  )
}

export default MobileTab