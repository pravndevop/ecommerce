import React,{useState} from 'react'
import {Close} from '@mui/icons-material'
function Announce() {
    const [announceStyle, setannounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')

    const handleClose =()=>{
        setannounceStyle(announceStyle + " hidden")
    }
    return (
    <div className={announceStyle}>
      <h1>hurry up its 40% off now</h1>
      <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce
