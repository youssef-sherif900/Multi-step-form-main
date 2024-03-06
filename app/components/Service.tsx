'use client'
import { Checkbox } from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { subscriptionState } from '../hooks/subscription'

type serviceProps = {
    price:string,
    title:string,
    desc:string,
    onClick:()=>void
}

function Service( {price,title,desc,onClick}:serviceProps) {

    const sub = useSelector(subscriptionState)
    const[toggle, setToggle] = useState(false)

  return (
    <div className={`flex justify-between py-3 md:p-3 my-4 md:w-[450px] md:h-[80px] items-center ${toggle && "bg-slate-100"} border-[1px] ${ toggle ? "border-purple-800" :'border-gray-300'} rounded-md`}>
      <div className='flex justify-center'>
        <Checkbox checked={toggle} onClick={()=>{
            setToggle((prev) => !prev)
            onClick()
        }} sx={{
          color:grey[400],
          borderWidth:1,
          '&.Mui-checked':{
            color:blue["900"]
          }
        }} />
        <div className='md:ml-3'>
          <h3 className='font-bold text-blue-900 '>{title}</h3>
          <p className='text-gray-400 text-xs md:text-base w-max md:auto'>{desc}</p>
        </div>
        </div>
        <h5 className='text-purple-500 font-medium text-sm md:text-base mr-3 md:mr-0 '>
          +${price}{sub === 'Monthly'?'/mo':'/yr'}
        </h5>
      </div>
  )
}

export default Service