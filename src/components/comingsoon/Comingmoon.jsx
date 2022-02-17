import React, { useEffect } from 'react'
import Clock from '../clock/Clock'
import {useState} from "react"

function Comingmoon() {
  const [days,setDays] = useState();
  const [hour,setHour] = useState();
  const [min,setMin] = useState();
  const [sec,setSec] = useState();

  let interval;
  const startTimer = ()=>{
    const countDownDate = new Date("Feb 14,2022").getTime() + 13*60*60*1000;
    interval = setInterval(() =>{
      const now = new Date().getTime()
      const distance = countDownDate - now;

      const d = Math.floor(distance / (24 * 60 * 60 *1000));
      const h = Math.floor((distance % (24 * 60 * 60 *1000))/(1000 * 60 * 60));
      const m = Math.floor((distance % (60 * 60 *1000))/(1000 * 60));
      const s = Math.floor((distance % (60 *1000))/(1000));

      if(distance < 0){
        clearInterval(interval.current);
      }else{
        setDays(d);
        setHour(h);
        setMin(m);
        setSec(s);
      }
    })
  };
  useEffect( () =>{
    startTimer();
  })

  return (
     <div className="comingsoon">
       <Clock days = {days} hours={hour} min={min} sec = {sec}/>
     </div>
  )
}
export default Comingmoon
