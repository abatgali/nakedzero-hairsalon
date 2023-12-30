import Link from 'next/link'
import React from 'react'

export default function AppointmentLink({children}) {
  return (
    <Link href='#appointment'>{children}</Link>
    // <a href='https://koalendar.com/e/nakedzerosalon'>{children}</a>
  )
}
