'use client'
import { useState } from "react"

const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const Calender = () => {
    const date = new Date();
    const todaysMonth = date.getMonth();
    const todaysYear = date.getFullYear();
    const todaysDate = date.getDate();
    const [currMonth, setCurrMonth] = useState(date.getMonth());
    const [currYear, setCurrYear] = useState(date.getFullYear());
    const currMonthTotalDays = new Date(currYear, currMonth + 1, 0).getDate();
    const offset = new Date(currYear, currMonth, 0).getDay() + 1;

    const handleNextClick = () => {
        if (currMonth == 11) {
            setCurrYear(prev => prev + 1);
            setCurrMonth(0);
        }
        else setCurrMonth(prev => prev + 1);
    }

    const handlePrevClick = () => {
        if (currMonth == 0) {
            setCurrYear(prev => prev - 1);
            setCurrMonth(11);
        }
        else setCurrMonth(prev => prev - 1);
    }

    return (
        <div className="calender-container text-black w-[300px] border-4 rounded-lg p-5 m-auto mt-24">
            <div className="title-container flex justify-between items-center ">
                <div className="title">
                    {Months[currMonth]} {currYear}
                </div>
                <div className="arrow-container flex gap-x-2.5">
                    <div className="arrow bg-white cursor-pointer bg-slate-400 rounded-full w-[24px] text-center" onClick={handlePrevClick}>{'<'}</div>
                    <div className="arrow bg-white cursor-pointer bg-slate-400 rounded-full w-[24px] text-center" onClick={handleNextClick}>{'>'}</div>
                </div>
            </div>
            <div className="days-container grid grid-cols-7 text-center">
                {Days.map((day, idx) => <div key={idx}>{day[0]}</div>)}
            </div>
            <div className="date-matrix-container grid grid-cols-7 text-center">
                {Array(currMonthTotalDays + offset).fill(null).map((data, idx) => {
                    if (idx - offset + 1 < 1) return <div key={idx}></div>
                    return <div key={idx} className={(currMonth == todaysMonth && currYear == todaysYear && (idx - offset + 1) == todaysDate) ? 'bg-blue-400 rounded-full' : ''}>{idx - offset + 1}</div>
                })}
            </div>
        </div>
    )
}

export default Calender