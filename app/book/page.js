import Appointment from '@/components/Appointment'
import React from 'react'

export default function Book() {
  return (
    <div className='container mx-auto my-16'>
        <h1 className='text-4xl font-bold text-center'>Get an Appointment</h1>
        <Appointment />
    </div>
  )
}
