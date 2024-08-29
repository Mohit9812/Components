'use client'
import { useEffect, useState } from "react";

const ProgressBar = ({ percentage }: {percentage: number}) => {
    return (
        <div className="h-[10px] w-[500px] bg-slate-200 flex items-center rounded-lg">
            <div className={`h-full bg-blue-500 rounded-lg`} style={{width: `${percentage}%`}}></div>
        </div>
    );
}

const ProgressBarGroups = () => {
    const [barCount, setBarCount] = useState<number[]>([])
    const handleAddButton = () => {
        console.log(barCount)
        let barCountCopy = [...barCount]
        barCountCopy.push(0);
        setBarCount(barCountCopy);
    }
    useEffect(()=>{
        let interval = setInterval(() => {
            let barCountCopy = [...barCount]
            for (let i = 0; i < barCountCopy.length; i++){
                if(barCountCopy[i] == 100) continue;
                barCountCopy[i] += 0.1;
            }
            setBarCount(barCountCopy);
        }, 5)

        return () => clearInterval(interval)
    }, [barCount])
    return (
        <div className="flex justify-evenly items-center flex-col h-screen">
            <button className="text-black bg-slate-300 p-3" onClick={handleAddButton}>Add</button>
            {barCount.map((data, idx) => <ProgressBar key={idx} percentage={data}/>)}
        </div>
    );
}

export default ProgressBarGroups