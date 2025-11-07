"use client"
import React, { useEffect, useState } from 'react'

const DateTime = () => {
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")
    const [year, setYear] = useState<number>()
    const [weekday, setWeekday] = useState("")
    const [time, setTime] = useState("")

  useEffect(() => {
    function update() {
      const date = new Date()

      setMonth(date.toLocaleString("en-US", { month: "short" }))
      setDay(date.toLocaleString("en-US", { day: "2-digit" }))
      setYear(date.getFullYear())
      setWeekday(date.toLocaleString("en-US", { weekday: "long" }))
      setTime(date.toLocaleString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase())
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className='flex flex-row gap-x-2 text-green-800 text-sm'>
        <div>
            {month} {day} {year}
        </div>
        <div>
            |
        </div>
        <div>
            {weekday} {time}
        </div>
    </div>
  )
}

export default DateTime