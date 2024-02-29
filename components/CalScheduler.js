import Link from 'next/link'
import React from 'react'

export default function AppointmentLink({children}) {
  return (
    <Link href='/book-appointment'>{children}</Link>
  )
}
